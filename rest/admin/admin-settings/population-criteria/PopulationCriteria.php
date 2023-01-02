<?php
class PopulationCriteria
{
    public $population_criteria_aid;
    public $population_criteria_is_active;
    public $population_criteria_program_id;
    public $population_criteria_range_from;
    public $population_criteria_range_to;
    public $population_criteria_category;
    public $population_criteria_created;
    public $population_criteria_datetime;

    public $connection;
    public $tblPopulationCriteria;
    public $tblPopulationProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPopulationCriteria = "pms_population_criteria";
        $this->tblPopulationProgram = "pms_population_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblPopulationCriteria} ";
        $sql .= "( population_criteria_is_active, ";
        $sql .= "population_criteria_program_id, ";
        $sql .= "population_criteria_range_from, ";
        $sql .= "population_criteria_range_to, ";
        $sql .= "population_criteria_category, ";
        $sql .= "population_criteria_created, ";
        $sql .= "population_criteria_datetime ) values ( ";
        $sql .= "'{$this->population_criteria_is_active}', ";
        $sql .= "'{$this->population_criteria_program_id}', ";
        $sql .= "'{$this->population_criteria_range_from}', ";
        $sql .= "'{$this->population_criteria_range_to}', ";
        $sql .= "'{$this->population_criteria_category}', ";
        $sql .= "'{$this->population_criteria_created}', ";
        $sql .= "'{$this->population_criteria_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblPopulationCriteria} as criteria, ";
        $sql .= "{$this->tblPopulationProgram} as population ";
        $sql .= "where criteria.population_criteria_is_active = 1 ";
        $sql .= "and criteria.population_criteria_category = 'Population' ";
        $sql .= "and criteria.population_criteria_program_id = population.population_program_aid ";
        $sql .= "order by criteria.population_criteria_program_id asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblPopulationCriteria} as criteria, ";
        $sql .= "{$this->tblPopulationProgram} as population ";
        $sql .= "where criteria.population_criteria_is_active = 1 ";
        $sql .= "and criteria.population_criteria_category = 'Population' ";
        $sql .= "and criteria.population_criteria_program_id = population.population_program_aid ";
        $sql .= "order by criteria.population_criteria_program_id asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblPopulationCriteria} as criteria, ";
        $sql .= "{$this->tblPopulationProgram} as population ";
        $sql .= "where criteria.population_criteria_is_active = 1 ";
        $sql .= "and criteria.population_criteria_category = 'Population' ";
        $sql .= "and criteria.population_criteria_program_id = population.population_program_aid ";
        $sql .= "and (population.population_program_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by population.population_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblPopulationCriteria} as criteria, ";
        $sql .= "{$this->tblPopulationProgram} as population ";
        $sql .= "where criteria.population_criteria_is_active = 0 ";
        $sql .= "and criteria.population_criteria_category = 'Population' ";
        $sql .= "and criteria.population_criteria_program_id = population.population_program_aid ";
        $sql .= "order by criteria.population_criteria_program_id asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblPopulationCriteria} as criteria, ";
        $sql .= "{$this->tblPopulationProgram} as population ";
        $sql .= "where criteria.population_criteria_is_active = 0 ";
        $sql .= "and criteria.population_criteria_category = 'Population' ";
        $sql .= "and criteria.population_criteria_program_id = population.population_program_aid ";
        $sql .= "order by criteria.population_criteria_program_id asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblPopulationCriteria} as criteria, ";
        $sql .= "{$this->tblPopulationProgram} as population ";
        $sql .= "where criteria.population_criteria_is_active = 0 ";
        $sql .= "and criteria.population_criteria_category = 'Population' ";
        $sql .= "and criteria.population_criteria_program_id = population.population_program_aid ";
        $sql .= "and (population.population_program_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by population.population_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblPopulationCriteria} set ";
        $sql .= "population_criteria_program_id = '{$this->population_criteria_program_id}', ";
        $sql .= "population_criteria_range_from = '{$this->population_criteria_range_from}', ";
        $sql .= "population_criteria_range_to = '{$this->population_criteria_range_to}', ";
        $sql .= "population_criteria_datetime = '{$this->population_criteria_datetime}' ";
        $sql .= "where population_criteria_aid = '{$this->population_criteria_aid}' ";

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
        $sql = "update {$this->tblPopulationCriteria} set ";
        $sql .= "population_criteria_is_active = '0', ";
        $sql .= "population_criteria_datetime = '{$this->population_criteria_datetime}' ";
        $sql .= "where population_criteria_aid = '{$this->population_criteria_aid}' ";

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
        $sql = "update {$this->tblPopulationCriteria} set ";
        $sql .= "population_criteria_is_active = '1', ";
        $sql .= "population_criteria_datetime = '{$this->population_criteria_datetime}' ";
        $sql .= "where population_criteria_aid = '{$this->population_criteria_aid}' ";

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
        $sql = "delete from {$this->tblPopulationCriteria} ";
        $sql .= "where population_criteria_aid  = '{$this->population_criteria_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function isProgramAlreadyExist()
    {
        $sql = "select * from {$this->tblPopulationCriteria} ";
        $sql .= "where population_criteria_program_id = '{$this->population_criteria_program_id}' ";
        $sql .= "and population_criteria_range_from = '{$this->population_criteria_range_from}' ";
        $sql .= "and population_criteria_range_to = '{$this->population_criteria_range_to}' ";
        $sql .= "and population_criteria_is_active = 1 ";
        $result = $this->connection->query($sql);

        return $result;
    }
}
