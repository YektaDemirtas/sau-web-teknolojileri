<?php
function safe($value) {
    return htmlspecialchars($value ?? "", ENT_QUOTES, "UTF-8");
}

$name = safe($_POST["name"] ?? "");
$email = safe($_POST["email"] ?? "");
$phone = safe($_POST["phone"] ?? "");
$gender = safe($_POST["gender"] ?? "");
$subject = safe($_POST["subject"] ?? "");
$message = safe($_POST["message"] ?? "");
$interests = $_POST["interests"] ?? [];
?>
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Sonucu</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">
  <h1>Gönderilen Form Bilgileri</h1>

  <table class="table table-bordered">
    <tr><th>Ad Soyad</th><td><?php echo $name; ?></td></tr>
    <tr><th>E-posta</th><td><?php echo $email; ?></td></tr>
    <tr><th>Telefon</th><td><?php echo $phone; ?></td></tr>
    <tr><th>Cinsiyet</th><td><?php echo $gender; ?></td></tr>
    <tr><th>Konu</th><td><?php echo $subject; ?></td></tr>
    <tr>
      <th>İlgi Alanları</th>
      <td>
        <?php
        if (!empty($interests)) {
            foreach ($interests as $interest) {
                echo safe($interest) . "<br>";
            }
        } else {
            echo "Seçilmedi";
        }
        ?>
      </td>
    </tr>
    <tr><th>Mesaj</th><td><?php echo nl2br($message); ?></td></tr>
  </table>

  <a href="../iletisim.html" class="btn btn-primary">Geri Dön</a>
</body>
</html>
