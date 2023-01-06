<?php
class IncomeProgram
{
    public $income_program_aid;
    public $income_program_is_active;
    public $income_program_name;
    public $income_program_description;
    public $income_program_contact_person;
    public $income_program_contact_number;
    public $income_program_contact_email;
    public $income_program_created;
    public $income_program_datetime;

    public $connection;
    public $tblIncomeProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblIncomeProgram = "pms_income_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblIncomeProgram} ";
        $sql .= "( income_program_is_active, ";
        $sql .= "income_program_name, ";
        $sql .= "income_program_description, ";
        $sql .= "income_program_contact_person, ";
        $sql .= "income_program_contact_number, ";
        $sql .= "income_program_contact_email, ";
        $sql .= "income_program_created, ";
        $sql .= "income_program_datetime ) values ( ";
        $sql .= "'{$this->income_program_is_active}', ";
        $sql .= "'{$this->income_program_name}', ";
        $sql .= "'{$this->income_program_description}', ";
        $sql .= "'{$this->income_program_contact_person}', ";
        $sql .= "'{$this->income_program_contact_number}', ";
        $sql .= "'{$this->income_program_contact_email}', ";
        $sql .= "'{$this->income_program_created}', ";
        $sql .= "'{$this->income_program_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_is_active = 1 ";
        $sql .= "order by income_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_is_active = 1 ";
        $sql .= "order by income_program_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_is_active = 1 ";
        $sql .= "and (income_program_name like '{$search}%' ";
        $sql .= "or income_program_contact_person like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by income_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_is_active = 0 ";
        $sql .= "order by income_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_is_active = 0 ";
        $sql .= "order by income_program_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_is_active = 0 ";
        $sql .= "and (income_program_name like '{$search}%' ";
        $sql .= "or income_program_contact_person like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by income_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblIncomeProgram} set ";
        $sql .= "income_program_name = '{$this->income_program_name}', ";
        $sql .= "income_program_description = '{$this->income_program_description}', ";
        $sql .= "income_program_contact_person = '{$this->income_program_contact_person}', ";
        $sql .= "income_program_contact_number = '{$this->income_program_contact_number}', ";
        $sql .= "income_program_contact_email = '{$this->income_program_contact_email}', ";
        $sql .= "income_program_datetime = '{$this->income_program_datetime}' ";
        $sql .= "where income_program_aid = '{$this->income_program_aid}' ";

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
        $sql = "update {$this->tblIncomeProgram} set ";
        $sql .= "income_program_is_active = '0', ";
        $sql .= "income_program_datetime = '{$this->income_program_datetime}' ";
        $sql .= "where income_program_aid = '{$this->income_program_aid}' ";

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
        $sql = "update {$this->tblIncomeProgram} set ";
        $sql .= "income_program_is_active = '1', ";
        $sql .= "income_program_datetime = '{$this->income_program_datetime}' ";
        $sql .= "where income_program_aid = '{$this->income_program_aid}' ";

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
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_aid = '{$this->income_program_aid}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function isAlreadyExist()
    {
        $sql = "select * from {$this->tblIncomeProgram} ";
        $sql .= "where income_program_name = '{$this->income_program_name}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    // public function isincomeProgramExist()
    // {
    //     $sql = "select * from {$this->tblAccount} ";
    //     $sql .= "where settings_account_role  = '{$this->settings_role_aid}' ";
    //     $result = $this->connection->query($sql);
    //     return $result;
    // }
}
