<?php
// login.php
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { exit(); }

require_once 'db_connect.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->mobile) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Mobile and Password required."]);
    exit();
}

$mobile = trim($data->mobile);
$password = $data->password;

try {
    // Search for user by mobile number
    $stmt = $conn->prepare("SELECT id, name, password FROM users WHERE mobile = ? LIMIT 1");
    $stmt->execute([$mobile]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        // Create session cookie
        $sessionToken = bin2hex(random_bytes(32));
        
        setcookie("user_session", $sessionToken, [
            'expires' => time() + 86400, // 24 hours
            'path' => '/',
            'domain' => 'localhost',
            'secure' => false,
            'httponly' => true, // Prevents XSS
            'samesite' => 'Lax'
        ]);

        echo json_encode(["status" => "success", "message" => "Login successful"]);
    } else {
        http_response_code(401);
        echo json_encode(["status" => "error", "message" => "Invalid mobile or password."]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error."]);
}
?>