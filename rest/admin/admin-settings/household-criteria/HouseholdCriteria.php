<?php
class HouseholdCriteria
{
    public $household_criteria_aid;
    public $household_criteria_is_active;
    public $household_criteria_program_id;
    public $household_criteria_range_from;
    public $household_criteria_range_to;
    public $household_criteria_category;
    public $household_criteria_created;
    public $household_criteria_datetime;

    public $connection;
    public $tblHouseholdCriteria;
    public $tblHouseholdProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHouseholdCriteria = "pms_household_criteria";
        $this->tblHouseholdProgram = "pms_household_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblHouseholdCriteria} ";
        $sql .= "( household_criteria_is_active, ";
        $sql .= "household_criteria_program_id, ";
        $sql .= "household_criteria_range_from, ";
        $sql .= "household_criteria_range_to, ";
        $sql .= "household_criteria_category, ";
        $sql .= "household_criteria_created, ";
        $sql .= "household_criteria_datetime ) values ( ";
        $sql .= "'{$this->household_criteria_is_active}', ";
        $sql .= "'{$this->household_criteria_program_id}', ";
        $sql .= "'{$this->household_criteria_range_from}', ";
        $sql .= "'{$this->household_criteria_range_to}', ";
        $sql .= "'{$this->household_criteria_category}', ";
        $sql .= "'{$this->household_criteria_created}', ";
        $sql .= "'{$this->household_criteria_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblHouseholdCriteria} as criteria, ";
        $sql .= "{$this->tblHouseholdProgram} as household ";
        $sql .= "where criteria.household_criteria_is_active = 1 ";
        $sql .= "and criteria.household_criteria_category = 'Household' ";
        $sql .= "and criteria.household_criteria_program_id = household.household_program_aid ";
        $sql .= "order by criteria.household_criteria_program_id asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblHouseholdCriteria} as criteria, ";
        $sql .= "{$this->tblHouseholdProgram} as household ";
        $sql .= "where criteria.household_criteria_is_active = 1 ";
        $sql .= "and criteria.household_criteria_category = 'Household' ";
        $sql .= "and criteria.household_criteria_program_id = household.household_program_aid ";
        $sql .= "order by criteria.household_criteria_program_id asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblHouseholdCriteria} as criteria, ";
        $sql .= "{$this->tblHouseholdProgram} as household ";
        $sql .= "where criteria.household_criteria_is_active = 1 ";
        $sql .= "and criteria.household_criteria_category = 'Household' ";
        $sql .= "and criteria.household_criteria_program_id = household.household_program_aid ";
        $sql .= "and (household.household_program_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by household.household_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblHouseholdCriteria} as criteria, ";
        $sql .= "{$this->tblHouseholdProgram} as household ";
        $sql .= "where criteria.household_criteria_is_active = 0 ";
        $sql .= "and criteria.household_criteria_category = 'Household' ";
        $sql .= "and criteria.household_criteria_program_id = household.household_program_aid ";
        $sql .= "order by criteria.household_criteria_program_id asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblHouseholdCriteria} as criteria, ";
        $sql .= "{$this->tblHouseholdProgram} as household ";
        $sql .= "where criteria.household_criteria_is_active = 0 ";
        $sql .= "and criteria.household_criteria_category = 'Household' ";
        $sql .= "and criteria.household_criteria_program_id = household.household_program_aid ";
        $sql .= "order by criteria.household_criteria_program_id asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblHouseholdCriteria} as criteria, ";
        $sql .= "{$this->tblHouseholdProgram} as household ";
        $sql .= "where criteria.household_criteria_is_active = 0 ";
        $sql .= "and criteria.household_criteria_category = 'Household' ";
        $sql .= "and criteria.household_criteria_program_id = household.household_program_aid ";
        $sql .= "and (household.household_program_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by household.household_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblHouseholdCriteria} set ";
        $sql .= "household_criteria_program_id = '{$this->household_criteria_program_id}', ";
        $sql .= "household_criteria_range_from = '{$this->household_criteria_range_from}', ";
        $sql .= "household_criteria_range_to = '{$this->household_criteria_range_to}', ";
        $sql .= "household_criteria_datetime = '{$this->household_criteria_datetime}' ";
        $sql .= "where household_criteria_aid = '{$this->household_criteria_aid}' ";

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
        $sql = "update {$this->tblHouseholdCriteria} set ";
        $sql .= "household_criteria_is_active = '0', ";
        $sql .= "household_criteria_datetime = '{$this->household_criteria_datetime}' ";
        $sql .= "where household_criteria_aid = '{$this->household_criteria_aid}' ";

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
        $sql = "update {$this->tblHouseholdCriteria} set ";
        $sql .= "household_criteria_is_active = '1', ";
        $sql .= "household_criteria_datetime = '{$this->household_criteria_datetime}' ";
        $sql .= "where household_criteria_aid = '{$this->household_criteria_aid}' ";

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
        $sql = "select * from {$this->tblHouseholdCriteria} ";
        $sql .= "where household_criteria_aid = '{$this->household_criteria_aid}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function isProgramAlreadyExist()
    {
        $sql = "select * from {$this->tblHouseholdCriteria} ";
        $sql .= "where household_criteria_program_id = '{$this->household_criteria_program_id}' ";
        $sql .= "and household_criteria_range_from = '{$this->household_criteria_range_from}' ";
        $sql .= "and household_criteria_range_to = '{$this->household_criteria_range_to}' ";
        $sql .= "and household_criteria_is_active = 1 ";
        $result = $this->connection->query($sql);

        return $result;
    }
}
