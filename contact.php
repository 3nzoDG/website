<?php

// $nom = $_POST['full-name'];
// $email = $_POST['email'];
// $message = $_POST['message'];
// $subject = "Prise de contact : $nom ";




// if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//     // Vérification des données du formulaire
//     if (!isset($_POST['full-name']) || empty($_POST['full-name'])) {
//         echo "<script>alert('Le champ nom est pas obligatoire.');</script>";
//         die();
//     }

//     if (isset($_POST['email']) && !empty($_POST['email'])) {
//         if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
//             echo "<script>alert('Votre email n'est pas valide.');</script>";
//             die();
//         }

//     } else {

//         die();
//     }

//     if (!isset($_POST['message']) || empty($_POST['message'])) {
//         echo "<script>alert('Le champ message est obligatoire.');</script>";
//         die();
//     }


//     $to = 'digiovannienzo1@gmail.com';
//     $from = 'no-reply@enzodigiovanni.fr';
//     $headers = "From: $email" . "\r\n" .
//     "Reply-To: $email" . "\r\n" .
//     "X-Mailer: PHP/" . phpversion();

//     $content = "Nom: $nom\nEmail: $email\nMessage: $message";

//     if (mail($to, $subject, $content, $headers)) {
//         echo 'Message envoyé avec succès.';
//     } else {
//         echo 'Erreur lors de l\'envoi du message.';
//     }

//     header('Location: /');


$nom = $_POST['full-name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$subject = "Prise de contact : $nom ";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (empty($nom) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        // Ici, au lieu d'utiliser echo pour afficher une alerte,
        // vous pourriez enregistrer le message d'erreur dans une session
        // et rediriger vers le formulaire où vous l'affichez.
        echo "<script>alert('Veuillez remplir correctement tous les champs.');</script>";
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
            echo "<script>alert('Erreur lors de l\'envoi du message.');</script>";
        }
    }
}
?>