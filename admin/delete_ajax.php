<?php
require_once(__DIR__.'/lib/functions.php');
require_once(__DIR__.'/../lib/dbh.php');
$id=h($_POST['id']);
$stmt=$dbh->prepare('DELETE FROM posts WHERE id=?');
$stmt->execute(array($id));
$dbh=null;


