<?php
class UnemploymentCriteria
{
    public $unemployment_criteria_aid;
    public $unemployment_criteria_is_active;
    public $unemployment_criteria_program_id;
    public $unemployment_criteria_range_from;
    public $unemployment_criteria_range_to;
    public $unemployment_criteria_category;
    public $unemployment_criteria_created;
    public $unemployment_criteria_datetime;

    public $connection;
    public $tblUnemploymentCriteria;
    public $tblUnemploymentProgram;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUnemploymentCriteria = "pms_unemployment_criteria";
        $this->tblUnemploymentProgram = "pms_unemployment_programs";
    }

    public function create()
    {
        $sql = "insert into {$this->tblUnemploymentCriteria} ";
        $sql .= "( unemployment_criteria_is_active, ";
        $sql .= "unemployment_criteria_program_id, ";
        $sql .= "unemployment_criteria_range_from, ";
        $sql .= "unemployment_criteria_range_to, ";
        $sql .= "unemployment_criteria_category, ";
        $sql .= "unemployment_criteria_created, ";
        $sql .= "unemployment_criteria_datetime ) values ( ";
        $sql .= "'{$this->unemployment_criteria_is_active}', ";
        $sql .= "'{$this->unemployment_criteria_program_id}', ";
        $sql .= "'{$this->unemployment_criteria_range_from}', ";
        $sql .= "'{$this->unemployment_criteria_range_to}', ";
        $sql .= "'{$this->unemployment_criteria_category}', ";
        $sql .= "'{$this->unemployment_criteria_created}', ";
        $sql .= "'{$this->unemployment_criteria_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAllActive()
    {
        $sql = "select * from {$this->tblUnemploymentCriteria} as criteria, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment ";
        $sql .= "where criteria.unemployment_criteria_is_active = 1 ";
        $sql .= "and criteria.unemployment_criteria_category = 'unemployment' ";
        $sql .= "and criteria.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "order by criteria.unemployment_criteria_program_id asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblUnemploymentCriteria} as criteria, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment ";
        $sql .= "where criteria.unemployment_criteria_is_active = 1 ";
        $sql .= "and criteria.unemployment_criteria_category = 'unemployment' ";
        $sql .= "and criteria.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "order by criteria.unemployment_criteria_program_id asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblUnemploymentCriteria} as criteria, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment ";
        $sql .= "where criteria.unemployment_criteria_is_active = 1 ";
        $sql .= "and criteria.unemployment_criteria_category = 'unemployment' ";
        $sql .= "and criteria.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "and (unemployment.unemployment_program_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by unemployment.unemployment_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblUnemploymentCriteria} as criteria, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment ";
        $sql .= "where criteria.unemployment_criteria_is_active = 0 ";
        $sql .= "and criteria.unemployment_criteria_category = 'unemployment' ";
        $sql .= "and criteria.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "order by criteria.unemployment_criteria_program_id asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblUnemploymentCriteria} as criteria, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment ";
        $sql .= "where criteria.unemployment_criteria_is_active = 0 ";
        $sql .= "and criteria.unemployment_criteria_category = 'unemployment' ";
        $sql .= "and criteria.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "order by criteria.unemployment_criteria_program_id asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblUnemploymentCriteria} as criteria, ";
        $sql .= "{$this->tblUnemploymentProgram} as unemployment ";
        $sql .= "where criteria.unemployment_criteria_is_active = 0 ";
        $sql .= "and criteria.unemployment_criteria_category = 'unemployment' ";
        $sql .= "and criteria.unemployment_criteria_program_id = unemployment.unemployment_program_aid ";
        $sql .= "and (unemployment.unemployment_program_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by unemployment.unemployment_program_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblUnemploymentCriteria} set ";
        $sql .= "unemployment_criteria_program_id = '{$this->unemployment_criteria_program_id}', ";
        $sql .= "unemployment_criteria_range_from = '{$this->unemployment_criteria_range_from}', ";
        $sql .= "unemployment_criteria_range_to = '{$this->unemployment_criteria_range_to}', ";
        $sql .= "unemployment_criteria_datetime = '{$this->unemployment_criteria_datetime}' ";
        $sql .= "where unemployment_criteria_aid = '{$this->unemployment_criteria_aid}' ";

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
        $sql = "update {$this->tblUnemploymentCriteria} set ";
        $sql .= "unemployment_criteria_is_active = '0', ";
        $sql .= "unemployment_criteria_datetime = '{$this->unemployment_criteria_datetime}' ";
        $sql .= "where unemployment_criteria_aid = '{$this->unemployment_criteria_aid}' ";

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
        $sql = "update {$this->tblUnemploymentCriteria} set ";
        $sql .= "unemployment_criteria_is_active = '1', ";
        $sql .= "unemployment_criteria_datetime = '{$this->unemployment_criteria_datetime}' ";
        $sql .= "where unemployment_criteria_aid = '{$this->unemployment_criteria_aid}' ";

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
        $sql = "select * from {$this->tblUnemploymentCriteria} ";
        $sql .= "where unemployment_criteria_aid = '{$this->unemployment_criteria_aid}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function isProgramAlreadyExist()
    {
        $sql = "select * from {$this->tblUnemploymentCriteria} ";
        $sql .= "where unemployment_criteria_program_id = '{$this->unemployment_criteria_program_id}' ";
        $sql .= "and unemployment_criteria_range_from = '{$this->unemployment_criteria_range_from}' ";
        $sql .= "and unemployment_criteria_range_to = '{$this->unemployment_criteria_range_to}' ";
        $sql .= "and unemployment_criteria_is_active = 1 ";
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
