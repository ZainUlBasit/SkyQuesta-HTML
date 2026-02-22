<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name     = htmlspecialchars(trim($_POST['name']));
    $email    = htmlspecialchars(trim($_POST['email']));
    $phone    = htmlspecialchars(trim($_POST['phone']));
    $location = htmlspecialchars(trim($_POST['location']));
    $message  = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($email) || empty($phone) || empty($location) || empty($message)) {
        echo "Please fill all fields.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'skyquesta@webslavery.com';      // Your Hostinger email
        $mail->Password   = 'Skyquesta@9';   // Your Hostinger email password

        // Try port 465 first (SSL)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        $mail->setFrom('skyquesta@webslavery.com', 'QEAC Website');
        $mail->addAddress('skyquesta@webslavery.com');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name\nEmail: $email\nPhone: $phone\nLocation: $location\n\nMessage:\n$message";

        $mail->send();
    } catch (Exception $e) {
        // If 465 fails, try 587 with TLS
        try {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->send();
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            exit;
        }
    }

    // On success redirect
     header("Location: index.html?success=1");
    exit;
} else {
    echo "Invalid request method.";
}
?>
