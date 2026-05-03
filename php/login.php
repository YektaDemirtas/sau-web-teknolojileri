<?php
$email = $_POST["email"] ?? "";
$password = $_POST["password"] ?? "";

$studentNo = "b251210387";
$correctEmail = $studentNo . "@sakarya.edu.tr";
$correctPassword = $studentNo;

if (empty($email) || empty($password)) {
    header("Location: ../login.html");
    exit;
}

if ($email === $correctEmail && $password === $correctPassword) {
    echo "<!DOCTYPE html>";
    echo "<html lang='tr'><head>";
    echo "<meta charset='UTF-8'>";
    echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
    echo "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>";
    echo "<title>Başarılı Giriş</title>";
    echo "</head><body class='container mt-5'>";
    echo "<div class='alert alert-success'>";
    echo "<h1>Hoşgeldiniz " . htmlspecialchars($studentNo) . "</h1>";
    echo "</div>";
    echo "<a href='../index.html' class='btn btn-primary'>Ana Sayfa</a>";
    echo "</body></html>";
} else {
    header("Location: ../login.html");
    exit;
}
?>
