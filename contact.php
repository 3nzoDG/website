<?php

$nom = $_POST['full-name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$subject = "Prise de contact : $nom ";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Vérifie si des champs sont vides ou si l'email n'est pas valide
    if (empty($nom) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        echo "<script>alert('Veuillez remplir correctement tous les champs.'); window.location.href = '/index.html';</script>";
    } else {
        $to = 'digiovannienzo1@gmail.com';
        $from = 'no-reply@enzodigiovanni.fr';
        $headers = "From: $email\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();
        $content = "Nom: $nom\nEmail: $email\nMessage: $message";

        if (mail($to, $subject, $content, $headers)) {
            // Redirection après l'envoi réussi
            header('Location: /success-page.php');
            exit;
        } else {
            echo "<script>alert('Erreur lors de l\'envoi du message.'); window.location.href = '/contact-form.php';</script>";
        }
    }
}


