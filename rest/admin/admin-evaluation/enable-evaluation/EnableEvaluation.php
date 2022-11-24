<?php
class EnableEvaluation
{

    public $evaluation_list_aid;
    public $evaluation_list_is_active;
    public $evaluation_list_datetime;

    public $connection;
    public $tblEnableEvaluation;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEnableEvaluation = "pms_evaluation_list";
    }


    public function readAll()
    {
        $sql = "select * from {$this->tblEnableEvaluation} ";
        $sql .= "limit 1 ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function create()
    {
        $sql = "insert into {$this->tblEnableEvaluation} ";
        $sql .= "( evaluation_list_is_active,";
        $sql .= "evaluation_list_datetime ) values (";
        $sql .= "'{$this->evaluation_list_is_active}',";
        $sql .= "'{$this->evaluation_list_datetime}')";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function delete()
    {
        $sql = "delete from {$this->tblEnableEvaluation} ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
