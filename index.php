<?php 

require __DIR__ . '/vendor/autoload.php';

use App\Human;

$bob = new Human("Bob", "Sinclair");

echo $bob->prettyName();

