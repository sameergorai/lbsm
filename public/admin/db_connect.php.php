<?php
// db_connect.php

$host = "localhost";
$db_name = "samir"; // Change to your DB name
$username = "root";   // Change to your DB user
$password = "";  // Change to your DB password

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    // Set error mode to exception for proper error handling
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Set character set to UTF8
    $conn->exec("set names utf8");
} catch(PDOException $exception) {
    // If connection fails, send a JSON error
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Connection error: " . $exception->getMessage()]);
    exit();
}
?>