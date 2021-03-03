<?php
require_once __DIR__ . '/database/database.php';
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>ex-dischi-musicali</title>
  <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/phpstyle.css">
</head>
<body>
  <div id="root">
    <header>
      <div class="container">
        <img src="img/logo.png" alt="logo" />
      </div>
    </header>

    <div class="cds-container container">
      <?php foreach ($disks as $disk): ?>
        <div class="cd">
          <img src="<?php echo $disk['poster'] ?>" alt="">

          <h3><?php echo $disk['title'] ?></h3>

          <span class="author"><?php echo $disk['author'] ?></span>

          <span class="year"><?php echo $disk['year'] ?></span>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</body>
</html>
