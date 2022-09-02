<?php
class Database
{
    private $host;
    private $databaseName;
    private $username;
    private $password;
    public function getConnection()
    {
        $host = "localhost";

        // // Development
        // $databaseName = "dbebtpqmtfksdq";
        // $username = "frontli5_fbs";
        // $password = "6o~q%}%U^&67";

        //Local Development
        $databaseName = "fbs_lcss";
        $username = "root";
        $password = "";


        // // Production
        // $databaseName = ""; 
        // $username = ""; 
        // $password = ""; 
        $mysqli = new mysqli($host, $username, $password, $databaseName);
        if ($mysqli->connect_error) {
            $mysqli = null;
        }
        return $mysqli;
    }
}
