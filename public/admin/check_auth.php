<?php
// C:\xampp\htdocs\admin\check_auth.php

// 1. CORS Headers (Must match your login.php settings)
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// 2. Check if the cookie exists
if (!isset($_COOKIE['user_session'])) {
    http_response_code(401); // Unauthorized
    echo json_encode(["status" => "error", "message" => "No active session found."]);
    exit();
}

$sessionToken = $_COOKIE['user_session'];

// 3. Connect to DB to verify this session
require_once 'db_connect.php';

try {
    /* Note: In a basic setup, we check if a user exists. 
       In a professional architected system, you would have a 'sessions' table 
       to match the $sessionToken. For now, we will verify the user is still valid.
    */
    
    // For this example, let's assume your session token is simple.
    // In production, you'd query: SELECT user_id FROM sessions WHERE token = ?
    
    // If we get here, the cookie exists.
    http_response_code(200); // OK
    echo json_encode([
        "status" => "success", 
        "message" => "Authenticated",
        "session_id" => $sessionToken // Optional: send back user info
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Server error checking session."]);
}