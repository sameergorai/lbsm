<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }

require_once 'db_connect.php'; 

$method = $_SERVER['REQUEST_METHOD'];
$uploadDir = 'uploads/faculty/';

if (!is_dir($uploadDir)) { mkdir($uploadDir, 0777, true); }

// ------------------------------------------------
// 1. GET: Fetch All Members
// ------------------------------------------------
if ($method === 'GET') {
    try {
        $stmt = $conn->prepare("SELECT * FROM faculty_members ORDER BY id DESC");
        $stmt->execute();
        $members = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Add full URL to photo path
        foreach ($members as &$member) {
            if (!empty($member['photo_path'])) {
                $member['photo_url'] = "http://localhost/admin/" . $member['photo_path'];
            } else {
                $member['photo_url'] = null;
            }
        }
        echo json_encode($members);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}

// ------------------------------------------------
// 2. POST: Add or Delete
// ------------------------------------------------
if ($method === 'POST') {
    
    // A. DELETE Action
    if (isset($_POST['action']) && $_POST['action'] === 'delete') {
        $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
        
        try {
            // Optional: Delete photo file from server
            $stmt = $conn->prepare("SELECT photo_path FROM faculty_members WHERE id = ?");
            $stmt->execute([$id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row && !empty($row['photo_path']) && file_exists($row['photo_path'])) {
                unlink($row['photo_path']);
            }

            // Delete Record
            $delStmt = $conn->prepare("DELETE FROM faculty_members WHERE id = ?");
            $delStmt->execute([$id]);
            
            echo json_encode(["message" => "Faculty deleted successfully"]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "Delete failed: " . $e->getMessage()]);
        }
        exit;
    }

    // B. ADD Action
    try {
        $name = $_POST['name'] ?? '';
        $designation = $_POST['designation'] ?? '';
        $department = $_POST['department'] ?? '';
        $main_category = $_POST['main_category'] ?? '';
        $sub_category = $_POST['sub_category'] ?? '';
        $status = $_POST['status'] ?? 'active';
        $photoPath = '';

        if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
            $fileName = time() . '_' . basename($_FILES["photo"]["name"]);
            $targetFilePath = $uploadDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
            $allowTypes = array('jpg', 'png', 'jpeg', 'webp');
            
            if (in_array(strtolower($fileType), $allowTypes)) {
                if (move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFilePath)) {
                    $photoPath = $targetFilePath;
                }
            }
        }

        $sql = "INSERT INTO faculty_members (name, designation, department, main_category, sub_category, photo_path, status) VALUES (:name, :desig, :dept, :main, :sub, :photo, :status)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':desig' => $designation,
            ':dept' => $department,
            ':main' => $main_category,
            ':sub' => $sub_category,
            ':photo' => $photoPath,
            ':status' => $status
        ]);

        echo json_encode(["message" => "Faculty added successfully"]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>