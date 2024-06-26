<?php
session_start();
include("database.php");

// Retrieve the raw POST data
$data = file_get_contents("php://input");

// If data is received, decode it from JSON format
if ($data) {
    $jsonData = json_decode($data);

    // Extract data from JSON
    $money = $jsonData->money;
    $user = $_SESSION["username"];

    // Prepare the SQL statement with placeholders
    $query = "UPDATE users SET money = ? WHERE username = ?";

    $params = array(&$money, &$user);

    $stmt = sqlsrv_prepare($conn, $query, $params);

    if ($stmt) {
        if (sqlsrv_execute($stmt)) {
            echo json_encode(array("message" => "Database updated successfully, you have more money"));
        } else {
            // Enhance error handling to get detailed error messages
            echo json_encode(array("error" => "Failed to execute SQL statement: " . print_r(sqlsrv_errors(), true)));
        }
    } else {
        // Enhance error handling to get detailed error messages
        echo json_encode(array("error" => "Error preparing statement: " . print_r(sqlsrv_errors(), true)));
    }
} else {
    // No data received
    echo json_encode(array("error" => "No data received"));
}
?>
