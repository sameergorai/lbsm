<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }

require_once 'db_connect.php'; // Your PDO connection file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // 1. Collect Data
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $subject = $_POST['subject'] ?? '';
        $experience = $_POST['experience'] ?? '';
        $message = $_POST['message'] ?? '';

        // 2. Validation
        if (empty($name) || empty($email) || empty($message)) {
            throw new Exception("Name, Email, and Message are required.");
        }

        // 3. Insert into Database
        $sql = "INSERT INTO contact_inquiries (name, email, subject, experience, message) 
                VALUES (:name, :email, :subj, :exp, :msg)";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':subj' => $subject,
            ':exp' => $experience,
            ':msg' => $message
        ]);

        echo json_encode(["message" => "Inquiry sent successfully"]);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
}
?>