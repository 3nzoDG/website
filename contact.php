<?php

$nom = $_POST['full-name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = "Prise de contact : $nom ";


$to = 'digiovannienzo1@gmail.com';
$from = 'no-reply@enzodigiovanni.fr';

$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

$content = "Nom: $nom\nEmail: $email\nMessage: $message";

if (mail($to, $subject, $content, $headers)) {
    echo 'Message envoyé avec succès.';
} else {
    echo 'Erreur lors de l\'envoi du message.';
}

header('Location: /');