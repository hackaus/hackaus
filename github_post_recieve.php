<h1>Git Pulling</h1>
<?php
$dir = getcwd() . '/';
$jsonPOST = $_POST['payload'];
// Use in the "Post-Receive URLs" section of your GitHub repo.
if ( $jsonPOST ) {
  $obj = json_decode($jsonPOST);
  $branch = $obj->ref;
  if($branch == "refs/heads/master") {
    shell_exec( "cd $dir && git reset --hard HEAD && git pull" );
    echo '<p>Success<p>';
    file_put_contents($dir . 'github.log', $jsonPOST);
  }
}
else {
  echo '<p>Last Pull Info</p><ul>';
  $obj = json_decode( file_get_contents($dir . 'github.log' ) );
  echo '<li>Branch: ' . $obj->ref . '</li>';
  echo '<li>Changes: <a href="' . $obj->compare . '">' . $obj->compare  . '</a></li>';
  echo '<li>Commited by: ' . $obj->commits[0]->author->name . '(' . $obj->commits[0]->author->username . ')</li>';
  echo '<li>Time: ' . $obj->commits[0]->timestamp . '</li>';
  echo '<li>Message: ' . str_replace("\n","<br/>",$obj->commits[0]->message) . '</li>';
  
  echo '</ul>';
}
echo '<p>POST keys:</p><ul>';  
foreach (array_keys($_POST) as $field)
{
    echo '<li>' . $field  . '</li>';
}
echo '</ul>';
?>
