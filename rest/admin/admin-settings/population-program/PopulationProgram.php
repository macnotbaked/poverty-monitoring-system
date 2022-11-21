<?php
class PopulationProgram
{
    public $population_program_aid;
    public $population_program_is_active;
    public $population_program_name;
    public $population_program_description;
    public $population_program_contact_person;
    public $population_program_contact_number;
    public $population_program_contact_email;
    public $population_program_created;
    public $population_program_datetime;

    public $connection;
    public $tblPopulationProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPopulationProgram = "pms_population_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblPopulationProgram} ";
        $sql .= "( population_program_is_active, ";
        $sql .= "population_program_name, ";
        $sql .= "population_program_description, ";
        $sql .= "population_program_contact_person, ";
        $sql .= "population_program_contact_number, ";
        $sql .= "population_program_contact_email, ";
        $sql .= "population_program_created, ";
        $sql .= "population_program_datetime ) values ( ";
        $sql .= "'{$this->population_program_is_active}', ";
        $sql .= "'{$this->population_program_name}', ";
        $sql .= "'{$this->population_program_description}', ";
        $sql .= "'{$this->population_program_contact_person}', ";
        $sql .= "'{$this->population_program_contact_number}', ";
        $sql .= "'{$this->population_program_contact_email}', ";
        $sql .= "'{$this->population_program_created}', ";
        $sql .= "'{$this->population_program_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblPopulationProgram} ";
        $sql .= "where population_program_is_active = 1 ";
        $sql .= "order by population_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblPopulationProgram} ";
        $sql .= "where population_program_is_active = 1 ";
        $sql .= "order by population_program_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblPopulationProgram} ";
        $sql .= "where population_program_is_active = 1 ";
        $sql .= "and (population_program_name like '{$search}%' ";
        $sql .= "or population_program_contact_person like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by population_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblPopulationProgram} ";
        $sql .= "where population_program_is_active = 0 ";
        $sql .= "order by population_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblPopulationProgram} ";
        $sql .= "where population_program_is_active = 0 ";
        $sql .= "order by population_program_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblPopulationProgram} ";
        $sql .= "where population_program_is_active = 0 ";
        $sql .= "and (population_program_name like '{$search}%' ";
        $sql .= "or population_program_contact_person like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by population_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblPopulationProgram} set ";
        $sql .= "population_program_name = '{$this->population_program_name}', ";
        $sql .= "population_program_description = '{$this->population_program_description}', ";
        $sql .= "population_program_contact_person = '{$this->population_program_contact_person}', ";
        $sql .= "population_program_contact_number = '{$this->population_program_contact_number}', ";
        $sql .= "population_program_contact_email = '{$this->population_program_contact_email}', ";
        $sql .= "population_program_datetime = '{$this->population_program_datetime}' ";
        $sql .= "where population_program_aid = '{$this->population_program_aid}' ";

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
        $sql = "update {$this->tblPopulationProgram} set ";
        $sql .= "population_program_is_active = '0', ";
        $sql .= "population_program_datetime = '{$this->population_program_datetime}' ";
        $sql .= "where population_program_aid = '{$this->population_program_aid}' ";

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
        $sql = "select * from {$this->tblPopulationProgram} ";
        $sql .= "where population_program_name = '{$this->population_program_name}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function ispopulationProgramExist()
    {
        $sql = "select * from {$this->tblAccount} ";
        $sql .= "where settings_account_role  = '{$this->settings_role_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
