<?php
// register.php

// 1. CORS Headers (Crucial for Next.js to talk to PHP)
header("Access-Control-Allow-Origin: *"); // In production, replace * with your Next.js domain
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Include Database Connection
require_once 'db_connect.php';

// 3. Get Raw JSON Data
$data = json_decode(file_get_contents("php://input"));

// 4. Validate Inputs
if (
    !isset($data->name) || 
    !isset($data->email) || 
    !isset($data->mobile) || 
    !isset($data->password) ||
    empty(trim($data->name)) ||
    empty(trim($data->email)) ||
    empty(trim($data->password))
) {
    http_response_code(400); // Bad Request
    echo json_encode(["status" => "error", "message" => "Incomplete data provided."]);
    exit();
}

$name = trim($data->name);
$email = trim($data->email);
$mobile = trim($data->mobile);
$password = $data->password;

try {
    // 5. Check if Email Already Exists
    $checkEmail = "SELECT id FROM users WHERE email = :email LIMIT 1";
    $stmt = $conn->prepare($checkEmail);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        http_response_code(409); // Conflict
        echo json_encode(["status" => "error", "message" => "This email is already registered."]);
        exit();
    }

    // 6. Check if Mobile Already Exists
    $checkMobile = "SELECT id FROM users WHERE mobile = :mobile LIMIT 1";
    $stmt = $conn->prepare($checkMobile);
    $stmt->bindParam(':mobile', $mobile);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        http_response_code(409); // Conflict
        echo json_encode(["status" => "error", "message" => "This mobile number is already registered."]);
        exit();
    }

    // 7. Hash Password (SECURITY CRITICAL)
    $password_hash = password_hash($password, PASSWORD_BCRYPT);

    // 8. Insert User
    $query = "INSERT INTO users (name, email, mobile, password) VALUES (:name, :email, :mobile, :password)";
    $stmt = $conn->prepare($query);

    // Sanitize inputs
    $name = htmlspecialchars(strip_tags($name));
    $email = htmlspecialchars(strip_tags($email));
    $mobile = htmlspecialchars(strip_tags($mobile));

    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":mobile", $mobile);
    $stmt->bindParam(":password", $password_hash);

    if ($stmt->execute()) {
        http_response_code(201); // Created
        echo json_encode(["status" => "success", "message" => "User registered successfully."]);
    } else {
        http_response_code(503); // Service Unavailable
        echo json_encode(["status" => "error", "message" => "Unable to register user."]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>