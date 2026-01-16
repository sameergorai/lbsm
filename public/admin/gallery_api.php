<?php
// CORS Headers
header("Access-Control-Allow-Origin: *"); // For production, replace * with your frontend URL
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle Preflight Requests (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include your PDO connection
require_once 'db_connect.php';

$method = $_SERVER['REQUEST_METHOD'];
$uploadDir = 'uploads/'; 

// Ensure upload directory exists
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// ---------------------------------------------------------
// 1. GET: Fetch All Images
// ---------------------------------------------------------
if ($method === 'GET') {
    try {
        $stmt = $conn->prepare("SELECT * FROM gallery_images ORDER BY id DESC");
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $images = [];
        if ($results) {
            foreach ($results as $row) {
                // Adjust base URL if your project folder is different
                $row['image_url'] = "http://localhost/admin/" . $row['image_path'];
                $images[] = $row;
            }
        }
        echo json_encode($images);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Database error: " . $e->getMessage()]);
    }
}

// ---------------------------------------------------------
// 2. POST: Handle Uploads & Deletions
// ---------------------------------------------------------
if ($method === 'POST') {
    
    // A. Handle DELETE Action
    if (isset($_POST['action']) && $_POST['action'] === 'delete') {
        $id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
        
        if (!$id) {
            echo json_encode(["error" => "Invalid ID"]);
            exit;
        }

        try {
            // 1. Get file path to unlink file
            $stmt = $conn->prepare("SELECT image_path FROM gallery_images WHERE id = ?");
            $stmt->execute([$id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row) {
                if (file_exists($row['image_path'])) {
                    unlink($row['image_path']);
                }
                
                // 2. Delete from DB
                $delStmt = $conn->prepare("DELETE FROM gallery_images WHERE id = ?");
                $delStmt->execute([$id]);
                
                echo json_encode(["message" => "Image deleted successfully"]);
            } else {
                echo json_encode(["error" => "Image not found"]);
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "Delete failed: " . $e->getMessage()]);
        }
        exit;
    }

    // B. Handle FILE UPLOAD
    if (isset($_FILES['image']) && isset($_POST['title']) && isset($_POST['category'])) {
        $title = trim($_POST['title']);
        $category = trim($_POST['category']);
        
        $fileName = time() . '_' . basename($_FILES["image"]["name"]);
        $targetFilePath = $uploadDir . $fileName;
        $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

        $allowTypes = array('jpg', 'png', 'jpeg', 'gif', 'webp');

        if (in_array(strtolower($fileType), $allowTypes)) {
            if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFilePath)) {
                try {
                    // Using PDO Prepared Statement for Insert
                    $sql = "INSERT INTO gallery_images (title, category, image_path) VALUES (:title, :category, :image_path)";
                    $stmt = $conn->prepare($sql);
                    
                    $stmt->execute([
                        ':title' => $title,
                        ':category' => $category,
                        ':image_path' => $targetFilePath
                    ]);

                    echo json_encode(["message" => "Image uploaded successfully"]);
                } catch (PDOException $e) {
                    http_response_code(500);
                    echo json_encode(["error" => "Database insert error: " . $e->getMessage()]);
                }
            } else {
                http_response_code(500);
                echo json_encode(["error" => "Failed to move uploaded file."]);
            }
        } else {
            echo json_encode(["error" => "Invalid file type. Only JPG, PNG, GIF, & WEBP allowed."]);
        }
    } else {
        echo json_encode(["error" => "Missing title, category, or image file."]);
    }
}
?>