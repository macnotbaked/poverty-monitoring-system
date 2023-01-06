<?php
class IncomeClassification
{
    public $monthly_income_aid;
    public $monthly_income_is_active;
    public $monthly_income_name;
    public $monthly_income_from;
    public $monthly_income_to;
    public $monthly_income_created;
    public $monthly_income_datetime;

    public $connection;
    public $tblMonthlyIncome;
    public $tblRepresentative;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMonthlyIncome = "pms_monthly_income";
        $this->tblRepresentative = "pms_representative";
    }

    public function create()
    {
        $sql = "insert into {$this->tblMonthlyIncome} ";
        $sql .= "( monthly_income_is_active, ";
        $sql .= "monthly_income_name, ";
        $sql .= "monthly_income_from, ";
        $sql .= "monthly_income_to, ";
        $sql .= "monthly_income_created, ";
        $sql .= "monthly_income_datetime ) values ( ";
        $sql .= "'{$this->monthly_income_is_active}', ";
        $sql .= "'{$this->monthly_income_name}', ";
        $sql .= "'{$this->monthly_income_from}', ";
        $sql .= "'{$this->monthly_income_to}', ";
        $sql .= "'{$this->monthly_income_created}', ";
        $sql .= "'{$this->monthly_income_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblMonthlyIncome} ";
        $sql .= "where monthly_income_is_active = 1 ";
        $sql .= "order by monthly_income_aid asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimit($start, $total)
    {
        $sql = "select * from {$this->tblMonthlyIncome} ";
        $sql .= "where monthly_income_is_active = 1 ";
        $sql .= "order by monthly_income_aid asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearch($search)
    {
        $sql = "select * from {$this->tblMonthlyIncome} ";
        $sql .= "where monthly_income_is_active = 1 ";
        $sql .= "and (monthly_income_name = '{$search}$' ";
        $sql .= ") ";
        $sql .= "order by monthly_income_from desc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblMonthlyIncome} ";
        $sql .= "where monthly_income_is_active = 0 ";
        $sql .= "order by monthly_income_from desc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblMonthlyIncome} ";
        $sql .= "where monthly_income_is_active = 0 ";
        $sql .= "order by monthly_income_from desc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblMonthlyIncome} ";
        $sql .= "where monthly_income_is_active = 0 ";
        $sql .= "and (monthly_income_name = '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by monthly_income_from desc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblMonthlyIncome} set ";
        $sql .= "monthly_income_name = '{$this->monthly_income_name}', ";
        $sql .= "monthly_income_from = '{$this->monthly_income_from}', ";
        $sql .= "monthly_income_to = '{$this->monthly_income_to}', ";
        $sql .= "monthly_income_datetime = '{$this->monthly_income_datetime}' ";
        $sql .= "where monthly_income_aid  = '{$this->monthly_income_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function archive()
    {
        $sql = "update {$this->tblMonthlyIncome} set ";
        $sql .= "monthly_income_is_active = '0', ";
        $sql .= "monthly_income_datetime = '{$this->monthly_income_datetime}' ";
        $sql .= "where monthly_income_aid  = '{$this->monthly_income_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function restore()
    {
        $sql = "update {$this->tblMonthlyIncome} set ";
        $sql .= "monthly_income_is_active = '1', ";
        $sql .= "monthly_income_datetime = '{$this->monthly_income_datetime}' ";
        $sql .= "where monthly_income_aid  = '{$this->monthly_income_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function delete()
    {
        $sql = "delete from {$this->tblMonthlyIncome} ";
        $sql .= "where monthly_income_aid  = '{$this->monthly_income_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function isIncomeClassificatExistToOther()
    {
        $sql = "select * from {$this->tblRepresentative} ";
        $sql .= "where representative_monthly_income_id  = '{$this->monthly_income_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
