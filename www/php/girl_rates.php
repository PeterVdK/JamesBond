<?php
header('Content-Type: application/json');


$jsonString = file_get_contents('./data_assets/girl_rating.json');
$data = json_decode($jsonString);

echo($data);

?>