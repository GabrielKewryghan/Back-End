<?php
    require_once "db.php";
    $connect = connectDB("senai");

    function selectTable($table){
        global $connect;
        $query = "SELECT * FROM $table";

        try{
            $result = $connect -> query($query);
            return $result;
        }catch(Exception $err){
            return $err;
        }
    }

    function selectTableByID($table, $id){
        global $connect;
        $query = "SELECT * FROM $table WHERE id = $id";
    
        try{
            $result = $connect -> query($query);
            return $result;
        }catch(Exception $err){
            return $err;
        }
    }
?>