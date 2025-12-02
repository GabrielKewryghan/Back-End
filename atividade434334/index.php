<?php
require_once "actions.php";
$user_table = selectTable('usuarios');
foreach($user_table as $user){
    echo $user['nome'];
}
?>