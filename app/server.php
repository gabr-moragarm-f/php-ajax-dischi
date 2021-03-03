<?php
require_once "../database/database.php";

$genres = [];

foreach ($disks as $disk) {
  if (!in_array($disk['genre'], $genres)) {
    $genres[] = $disk['genre'];
  }
}

if (!empty($_GET['genre'])) {
  foreach ($disks as $disk) {
    if (strtolower($disk['genre']) === $_GET['genre']) {
      $disksResponse[] = $disk;
    }
  }
}else {
  $disksResponse = $disks;
}

$response = [
  'disks' => $disksResponse,
  'genres' => $genres
];

header('Content-Type: application/json');

echo json_encode($response);
