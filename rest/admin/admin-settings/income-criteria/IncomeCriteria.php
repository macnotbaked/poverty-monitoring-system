<?php
class IncomeCriteria
{
    public $income_criteria_aid;
    public $income_criteria_is_active;
    public $income_criteria_program_id;
    public $income_criteria_range_from;
    public $income_criteria_range_to;
    public $income_criteria_category;
    public $income_criteria_created;
    public $income_criteria_datetime;

    public $connection;
    public $tblIncomeCriteria;
    public $tblIncomeProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblIncomeCriteria = "pms_income_criteria";
        $this->tblIncomeProgram = "pms_income_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblIncomeCriteria} ";
        $sql .= "( income_criteria_is_active, ";
        $sql .= "income_criteria_program_id, ";
        $sql .= "income_criteria_range_from, ";
        $sql .= "income_criteria_range_to, ";
        $sql .= "income_criteria_category, ";
        $sql .= "income_criteria_created, ";
        $sql .= "income_criteria_datetime ) values ( ";
        $sql .= "'{$this->income_criteria_is_active}', ";
        $sql .= "'{$this->income_criteria_program_id}', ";
        $sql .= "'{$this->income_criteria_range_from}', ";
        $sql .= "'{$this->income_criteria_range_to}', ";
        $sql .= "'{$this->income_criteria_category}', ";
        $sql .= "'{$this->income_criteria_created}', ";
        $sql .= "'{$this->income_criteria_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblIncomeCriteria} as criteria, ";
        $sql .= "{$this->tblIncomeProgram} as income ";
        $sql .= "where criteria.income_criteria_is_active = 1 ";
        $sql .= "and criteria.income_criteria_category = 'income' ";
        $sql .= "and criteria.income_criteria_program_id = income.income_program_aid ";
        $sql .= "order by criteria.income_criteria_program_id asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblIncomeCriteria} as criteria, ";
        $sql .= "{$this->tblIncomeProgram} as income ";
        $sql .= "where criteria.income_criteria_is_active = 1 ";
        $sql .= "and criteria.income_criteria_category = 'income' ";
        $sql .= "and criteria.income_criteria_program_id = income.income_program_aid ";
        $sql .= "order by criteria.income_criteria_program_id asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblIncomeCriteria} as criteria, ";
        $sql .= "{$this->tblIncomeProgram} as income ";
        $sql .= "where criteria.income_criteria_is_active = 1 ";
        $sql .= "and criteria.income_criteria_category = 'income' ";
        $sql .= "and criteria.income_criteria_program_id = income.income_program_aid ";
        $sql .= "and (income.income_program_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by income.income_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblIncomeCriteria} set ";
        $sql .= "income_criteria_program_id = '{$this->income_criteria_program_id}', ";
        $sql .= "income_criteria_range_from = '{$this->income_criteria_range_from}', ";
        $sql .= "income_criteria_range_to = '{$this->income_criteria_range_to}', ";
        $sql .= "income_criteria_datetime = '{$this->income_criteria_datetime}' ";
        $sql .= "where income_criteria_aid = '{$this->income_criteria_aid}' ";

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
        $sql = "update {$this->tblIncomeCriteria} set ";
        $sql .= "income_criteria_is_active = '0', ";
        $sql .= "income_criteria_datetime = '{$this->income_criteria_datetime}' ";
        $sql .= "where income_criteria_aid = '{$this->income_criteria_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function isProgramAlreadyExist()
    {
        $sql = "select * from {$this->tblIncomeCriteria} ";
        $sql .= "where income_criteria_program_id = '{$this->income_criteria_program_id}' ";
        $sql .= "and income_criteria_range_from = '{$this->income_criteria_range_from}' ";
        $sql .= "and income_criteria_range_to = '{$this->income_criteria_range_to}' ";
        $sql .= "and income_criteria_is_active = 1 ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function isincomeProgramExist()
    {
        $sql = "select * from {$this->tblAccount} ";
        $sql .= "where settings_account_role  = '{$this->settings_role_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
