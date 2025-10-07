<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'prospects';
$username = 'root';
$password = 'motdepasse';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Récupération de l'email
$email = $_POST['email'] ?? '';

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Insertion dans la base
    $stmt = $pdo->prepare("INSERT INTO emails (email) VALUES (:email)");
    $stmt->execute(['email' => $email]);
    echo "Merci ! Votre email a été enregistré.";
} else {
    echo "Adresse email invalide.";
}
?>
