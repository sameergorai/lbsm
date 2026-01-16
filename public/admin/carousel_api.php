<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }

require_once 'db_connect.php'; // Your PDO Connection

$method = $_SERVER['REQUEST_METHOD'];
$uploadDir = 'uploads/carousel/'; // specific folder for carousel

if (!is_dir($uploadDir)) { mkdir($uploadDir, 0777, true); }

// 1. GET: Fetch All
if ($method === 'GET') {
    try {
        $stmt = $conn->prepare("SELECT * FROM carousel_images ORDER BY id DESC");
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $data = [];
        foreach ($results as $row) {
            $row['image_url'] = "http://localhost/admin/" . $row['image_path'];
            $data[] = $row;
        }
        echo json_encode($data);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}

// 2. POST: Upload & Delete
if ($method === 'POST') {

    // A. DELETE Action (Only removes from SQL, keeps file)
    if (isset($_POST['action']) && $_POST['action'] === 'delete') {
        $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
        
        try {
            // We ONLY delete the database record. 
            // We do NOT use unlink(), so the file stays on the server.
            $stmt = $conn->prepare("DELETE FROM carousel_images WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(["message" => "Removed from database successfully"]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => $e->getMessage()]);
        }
        exit;
    }

    // B. UPLOAD Action
    if (isset($_FILES['image'])) {
        $title = $_POST['title'] ?? '';
        $desc = $_POST['description'] ?? '';
        
        $fileName = time() . '_' . basename($_FILES["image"]["name"]);
        $targetFilePath = $uploadDir . $fileName;
        $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
        $allowTypes = array('jpg', 'png', 'jpeg', 'webp');

        if (in_array(strtolower($fileType), $allowTypes)) {
            if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)) {
                try {
                    $sql = "INSERT INTO carousel_images (title, description, image_path) VALUES (:title, :desc, :path)";
                    $stmt = $conn->prepare($sql);
                    $stmt->execute([':title' => $title, ':desc' => $desc, ':path' => $targetFilePath]);
                    echo json_encode(["message" => "Carousel uploaded"]);
                } catch (PDOException $e) {
                    echo json_encode(["error" => "DB Error: " . $e->getMessage()]);
                }
            } else {
                echo json_encode(["error" => "File upload failed"]);
            }
        } else {
            echo json_encode(["error" => "Invalid file type"]);
        }
    }
}
?>