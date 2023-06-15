<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$package = $_POST['package'];
$bookings = $_POST['bookings'];

$email_from = 'uncensoredphotography7@gmail.com';

$email_subject = 'New Form Submission'

$email_body = "User Name: $name.\\n" .
              "User Email: $visitor_email.\\n" .
              "Package: $package.\\n" .
              "User Bookings: $bookings.\\n";

$to = 'hopewellnkosi545@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: bookUs.html")

?>