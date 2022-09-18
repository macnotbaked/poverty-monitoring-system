<?php
class Database
{
    public function getConnection()
    {
        $host = "localhost";

        //Local Development
        $databaseName = "pms";
        $username = "root";
        $password = "";

        $mysqli = new mysqli($host, $username, $password, $databaseName);
        if ($mysqli->connect_error) {
            $mysqli = null;
        }
        return $mysqli;
    }
}
