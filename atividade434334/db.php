<?php
function connectDB ($dbname){
$hostname = "localhost";
$username   = "root";
$password = '';


try{
    $connect = new mysqli($hostname, $username, $password, $dbname);
    return $connect;
} catch(Exception $err){
    return $err;
}

}
?>