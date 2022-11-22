<?php
class HouseholdProgram
{
    public $household_program_aid;
    public $household_program_is_active;
    public $household_program_name;
    public $household_program_description;
    public $household_program_contact_person;
    public $household_program_contact_number;
    public $household_program_contact_email;
    public $household_program_created;
    public $household_program_datetime;

    public $connection;
    public $tblHouseholdProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHouseholdProgram = "pms_household_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblHouseholdProgram} ";
        $sql .= "( household_program_is_active, ";
        $sql .= "household_program_name, ";
        $sql .= "household_program_description, ";
        $sql .= "household_program_contact_person, ";
        $sql .= "household_program_contact_number, ";
        $sql .= "household_program_contact_email, ";
        $sql .= "household_program_created, ";
        $sql .= "household_program_datetime ) values ( ";
        $sql .= "'{$this->household_program_is_active}', ";
        $sql .= "'{$this->household_program_name}', ";
        $sql .= "'{$this->household_program_description}', ";
        $sql .= "'{$this->household_program_contact_person}', ";
        $sql .= "'{$this->household_program_contact_number}', ";
        $sql .= "'{$this->household_program_contact_email}', ";
        $sql .= "'{$this->household_program_created}', ";
        $sql .= "'{$this->household_program_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_is_active = 1 ";
        $sql .= "order by household_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_is_active = 1 ";
        $sql .= "order by household_program_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_is_active = 1 ";
        $sql .= "and (household_program_name like '{$search}%' ";
        $sql .= "or household_program_contact_person like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by household_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_is_active = 0 ";
        $sql .= "order by household_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_is_active = 0 ";
        $sql .= "order by household_program_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_is_active = 0 ";
        $sql .= "and (household_program_name like '{$search}%' ";
        $sql .= "or household_program_contact_person like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by household_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblHouseholdProgram} set ";
        $sql .= "household_program_name = '{$this->household_program_name}', ";
        $sql .= "household_program_description = '{$this->household_program_description}', ";
        $sql .= "household_program_contact_person = '{$this->household_program_contact_person}', ";
        $sql .= "household_program_contact_number = '{$this->household_program_contact_number}', ";
        $sql .= "household_program_contact_email = '{$this->household_program_contact_email}', ";
        $sql .= "household_program_datetime = '{$this->household_program_datetime}' ";
        $sql .= "where household_program_aid = '{$this->household_program_aid}' ";

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
        $sql = "update {$this->tblHouseholdProgram} set ";
        $sql .= "household_program_is_active = '0', ";
        $sql .= "household_program_datetime = '{$this->household_program_datetime}' ";
        $sql .= "where household_program_aid = '{$this->household_program_aid}' ";

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
        $sql = "update {$this->tblHouseholdProgram} set ";
        $sql .= "household_program_is_active = '1', ";
        $sql .= "household_program_datetime = '{$this->household_program_datetime}' ";
        $sql .= "where household_program_aid = '{$this->household_program_aid}' ";

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
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_aid = '{$this->household_program_aid}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function isAlreadyExist()
    {
        $sql = "select * from {$this->tblHouseholdProgram} ";
        $sql .= "where household_program_name = '{$this->household_program_name}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function ishouseholdProgramExist()
    {
        $sql = "select * from {$this->tblAccount} ";
        $sql .= "where settings_account_role  = '{$this->settings_role_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
