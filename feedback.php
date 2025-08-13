<?php
$servername = "sql104.infinityfree.com"; // Replace with actual server name
$username   = "if0_39699633";     // Your DB username
$password   = "GxRYDuwZ7F";         // Your DB password
$dbname     = "if0_39699633_Feedback"; // Your DB name

// Connect to Database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Catch form data safely
$name    = $_POST['name'] ?? '';
$email   = $_POST['email'] ?? '';
$comment = $_POST['message'] ?? '';

// Insert using prepared statement
$stmt = $conn->prepare("INSERT INTO Feedback (Name, Email, Comment) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $comment);

if ($stmt->execute()) {
    echo "Thank you! Your feedback has been submitted";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
