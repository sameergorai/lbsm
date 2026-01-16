<?php
// logout.php

// 1. Headers for Cross-Origin (CORS)
header("Access-Control-Allow-Origin: http://localhost:3000"); // Match your Next.js URL
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// 2. Handle preflight
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 3. Clear the HttpOnly Cookie
// We set the expiration time to 1 hour ago (time() - 3600)
setcookie("user_session", "", [
    'expires' => time() - 3600, 
    'path' => '/',
    'domain' => 'localhost',
    'secure' => false, // Set to true for production HTTPS
    'httponly' => true, // Must match the setting used in login.php
    'samesite' => 'Lax'
]);

// 4. Send success response
echo json_encode([
    "status" => "success",
    "message" => "Logged out successfully"
]);
exit();
?>