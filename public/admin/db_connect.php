<?php
// db_connect.php

$host = "localhost";
$db_name = "samir";   // Change to your DB name
$username = "root";   // Change to your DB user
$password = "";       // Change to your DB password

try {
    $conn = new PDO(
        "mysql:host=$host;dbname=$db_name;charset=utf8",
        $username,
        $password
    );

    // Set error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Connection error: " . $exception->getMessage()
    ]);
    exit();
}
