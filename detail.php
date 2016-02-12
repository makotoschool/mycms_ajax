<?php
header("Content-type:text/plain;charset=UTF-8");
require_once(__DIR__.'/admin/lib/functions.php');
require_once(__DIR__.'/lib/dbh.php');
$select_id=h($_POST['id']);
$stmt=$dbh->prepare('SELECT title,content FROM posts WHERE id=?');
$stmt->execute(array($select_id));
$dbh=null;
?>

<?php foreach($stmt as $row): ?>
<h2><?php echo $row['title'];?></h2>
<p><?php echo $row['content'];?></p>

<?php endforeach; ?>







