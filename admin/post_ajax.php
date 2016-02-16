<?php
header("Content-type:text/plain;charset=UTF-8");
require_once(__DIR__.'/lib/functions.php');
require_once(__DIR__.'/../lib/dbh.php');
$title=h($_POST['title']);
$content=h($_POST['content']);
$stmt=$dbh->prepare('INSERT INTO posts(new_date,title,content) VALUES (now(),:title,:content)');
$stmt->execute(array(
				'title'=>$title,
				'content'=>$content
				));
$stmt_new=$dbh->query('SELECT * FROM posts ORDER BY new_date DESC LIMIT 1');				

foreach($stmt_new as $post):?>				
<tr>
	<td><?php echo $post['id']; ?></td>
	<td><?php echo $post['new_date']; ?></td>
	<td><?php echo $post['title']; ?></td>
	<td><?php echo $post['content']; ?></td>
	<td>
	 <button id="<?php echo $post['id'];?>" class="del" >削除</button></br>
	 <a href="edit.php?id=<?php echo $post['id']; ?>">編集する</a>
	</td>
</tr> 

<?php endforeach; ?>
