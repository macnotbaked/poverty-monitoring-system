<?php
class UnemploymentProgram
{
    public $unemployment_program_aid;
    public $unemployment_program_is_active;
    public $unemployment_program_name;
    public $unemployment_program_description;
    public $unemployment_program_contact_person;
    public $unemployment_program_contact_number;
    public $unemployment_program_contact_email;
    public $unemployment_program_created;
    public $unemployment_program_datetime;

    public $connection;
    public $tblUnemploymentProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUnemploymentProgram = "pms_unemployment_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblUnemploymentProgram} ";
        $sql .= "( unemployment_program_is_active, ";
        $sql .= "unemployment_program_name, ";
        $sql .= "unemployment_program_description, ";
        $sql .= "unemployment_program_contact_person, ";
        $sql .= "unemployment_program_contact_number, ";
        $sql .= "unemployment_program_contact_email, ";
        $sql .= "unemployment_program_created, ";
        $sql .= "unemployment_program_datetime ) values ( ";
        $sql .= "'{$this->unemployment_program_is_active}', ";
        $sql .= "'{$this->unemployment_program_name}', ";
        $sql .= "'{$this->unemployment_program_description}', ";
        $sql .= "'{$this->unemployment_program_contact_person}', ";
        $sql .= "'{$this->unemployment_program_contact_number}', ";
        $sql .= "'{$this->unemployment_program_contact_email}', ";
        $sql .= "'{$this->unemployment_program_created}', ";
        $sql .= "'{$this->unemployment_program_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblUnemploymentProgram} ";
        $sql .= "where unemployment_program_is_active = 1 ";
        $sql .= "order by unemployment_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblUnemploymentProgram} ";
        $sql .= "where unemployment_program_is_active = 1 ";
        $sql .= "order by unemployment_program_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblUnemploymentProgram} ";
        $sql .= "where unemployment_program_is_active = 1 ";
        $sql .= "and (unemployment_program_name like '{$search}%' ";
        $sql .= "or unemployment_program_contact_person like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by unemployment_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblUnemploymentProgram} set ";
        $sql .= "unemployment_program_name = '{$this->unemployment_program_name}', ";
        $sql .= "unemployment_program_description = '{$this->unemployment_program_description}', ";
        $sql .= "unemployment_program_contact_person = '{$this->unemployment_program_contact_person}', ";
        $sql .= "unemployment_program_contact_number = '{$this->unemployment_program_contact_number}', ";
        $sql .= "unemployment_program_contact_email = '{$this->unemployment_program_contact_email}', ";
        $sql .= "unemployment_program_datetime = '{$this->unemployment_program_datetime}' ";
        $sql .= "where unemployment_program_aid = '{$this->unemployment_program_aid}' ";

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
        $sql = "update {$this->tblUnemploymentProgram} set ";
        $sql .= "unemployment_program_is_active = '0', ";
        $sql .= "unemployment_program_datetime = '{$this->unemployment_program_datetime}' ";
        $sql .= "where unemployment_program_aid = '{$this->unemployment_program_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function isAlreadyExist()
    {
        $sql = "select * from {$this->tblUnemploymentProgram} ";
        $sql .= "where unemployment_program_name = '{$this->unemployment_program_name}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function isunemploymentProgramExist()
    {
        $sql = "select * from {$this->tblAccount} ";
        $sql .= "where settings_account_role  = '{$this->settings_role_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
