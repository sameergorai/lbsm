<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }

require_once 'db_connect.php';

$method = $_SERVER['REQUEST_METHOD'];
$baseUploadDir = 'uploads/notices/';

if (!is_dir($baseUploadDir)) { mkdir($baseUploadDir, 0777, true); }

// ------------------------------------------------
// 1. GET: Fetch All Notices
// ------------------------------------------------
if ($method === 'GET') {
    try {
        $stmt = $conn->prepare("SELECT * FROM notices ORDER BY created_at DESC");
        $stmt->execute();
        $notices = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Add full URL
        foreach ($notices as &$notice) {
            $notice['file_url'] = "http://localhost/admin/" . $notice['file_path'];
            // Format date for frontend
            $notice['formatted_date'] = date("Y-m-d", strtotime($notice['created_at']));
        }
        echo json_encode($notices);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}

// ------------------------------------------------
// 2. POST: Upload or Delete
// ------------------------------------------------
if ($method === 'POST') {

    // A. DELETE Action
    if (isset($_POST['action']) && $_POST['action'] === 'delete') {
        $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
        try {
            // Get file path first
            $stmt = $conn->prepare("SELECT file_path FROM notices WHERE id = ?");
            $stmt->execute([$id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row && file_exists($row['file_path'])) {
                unlink($row['file_path']); // Delete file from server
            }

            $delStmt = $conn->prepare("DELETE FROM notices WHERE id = ?");
            $delStmt->execute([$id]);
            
            echo json_encode(["message" => "Notice deleted successfully"]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "Delete failed: " . $e->getMessage()]);
        }
        exit;
    }

    // B. UPLOAD Action
    try {
        if (!isset($_FILES['file']) || !isset($_POST['title']) || !isset($_POST['category'])) {
            throw new Exception("Missing required fields.");
        }

        $title = $_POST['title'];
        $category = $_POST['category']; // 'merit', 'placement', 'important'
        
        // Validate Category
        $allowedCats = ['merit', 'placement', 'important'];
        if (!in_array($category, $allowedCats)) {
            throw new Exception("Invalid category.");
        }

        // Upload Logic
        $targetDir = $baseUploadDir . $category . '/'; // e.g. uploads/notices/merit/
        if (!is_dir($targetDir)) { mkdir($targetDir, 0777, true); }

        $fileName = time() . '_' . basename($_FILES["file"]["name"]);
        $targetFilePath = $targetDir . $fileName;
        $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

        if (strtolower($fileType) !== 'pdf') {
            throw new Exception("Only PDF files are allowed.");
        }

        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)) {
            $sql = "INSERT INTO notices (title, category, file_path) VALUES (:title, :cat, :path)";
            $stmt = $conn->prepare($sql);
            $stmt->execute([':title' => $title, ':cat' => $category, ':path' => $targetFilePath]);
            echo json_encode(["message" => "Notice uploaded successfully"]);
        } else {
            throw new Exception("File upload failed.");
        }

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>