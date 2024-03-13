<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message envoyé</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .success-message {
            text-align: center;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .button {
            position: relative;
            display: inline-block;
            background-color: #4CAF50;
            color: black;
            padding: 10px 20px;
            text-decoration: none;
            margin-top: 20px;
            border-radius: 5px;
            z-index: 1;
            overflow: hidden;
            border: 1px solid black;
        }

        .button::before {
            position: absolute;
            content: "";
            display: block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0%;
            height: 110%;
            background: white;
            transition: all 0.4s ease;
            z-index: -1;
        }


        .button:hover::before {
            width: 110%;

        }
    </style>
</head>

<body>
    <div class="success-message">
        <h1>Message envoyé avec succès!</h1>
        <p>Votre message a bien été reçu. Je vous répondrais dans les plus brefs délais.</p>
        <a href="http://votre_site_web.com" class="button">Revenir sur mon site</a>
    </div>
</body>

</html>