<?php
class EnableEvaluation
{

    public $evaluation_list_aid;
    public $evaluation_list_is_active;
    public $evaluation_list_created;
    public $evaluation_list_datetime;

    public $connection;
    public $tblEnableEvaluation;
    public $tblRepresentative;
    public $tblSitio;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEnableEvaluation = "pms_evaluation_list";
        $this->tblRepresentative = "pms_representative";
        $this->tblSitio = "pms_sitio";
    }

    public function readActiveEvaluation()
    {
        $sql = "select * from {$this->tblEnableEvaluation} as eval, ";
        $sql .= "{$this->tblSitio} as purok, ";
        $sql .= "{$this->tblRepresentative} as household ";
        $sql .= "where eval.evaluation_list_is_active = 1 ";
        $sql .= "and purok.sitio_is_active = 1 ";
        $sql .= "and household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_eval_id = eval.evaluation_list_aid ";
        $sql .= "order by household.representative_house_number asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblEnableEvaluation} ";
        $sql .= "where evaluation_list_is_active = 1 ";
        $sql .= "limit 1 ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllEvaluation()
    {
        $sql = "select * from {$this->tblEnableEvaluation} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitEvaluation($start, $total)
    {
        $sql = "select * from {$this->tblEnableEvaluation} ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchEvaluation($search)
    {
        $sql = "select * from {$this->tblEnableEvaluation} ";
        $sql .= "where (evaluation_list_created like '{$search}%' ";
        $sql .= ") ";

        $result = $this->connection->query($sql);

        return $result;
    }

    public function create()
    {
        $sql = "insert into {$this->tblEnableEvaluation} ";
        $sql .= "( evaluation_list_is_active,";
        $sql .= "evaluation_list_created,";
        $sql .= "evaluation_list_datetime ) values (";
        $sql .= "'{$this->evaluation_list_is_active}',";
        $sql .= "'{$this->evaluation_list_created}',";
        $sql .= "'{$this->evaluation_list_datetime}')";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function archive()
    {
        $sql = "update {$this->tblEnableEvaluation} set ";
        $sql .= "evaluation_list_is_active = '0', ";
        $sql .= "evaluation_list_datetime = '{$this->evaluation_list_datetime}' ";
        $sql .= "where evaluation_list_aid = '{$this->evaluation_list_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function readCountRepresentativeEvaluation()
    {
        $sql = "select *, count(household.representative_purok_id) as total from {$this->tblEnableEvaluation} as eval, ";
        $sql .= "{$this->tblSitio} as purok, ";
        $sql .= "{$this->tblRepresentative} as household ";
        $sql .= "where household.representative_eval_id = '{$this->evaluation_list_aid}' ";
        $sql .= "and household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_eval_id = eval.evaluation_list_aid ";
        $sql .= "group by household.representative_purok_id ";
        $sql .= "order by household.representative_house_number asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllRepresentativeEvaluation()
    {
        $sql = "select * from {$this->tblEnableEvaluation} as eval, ";
        $sql .= "{$this->tblSitio} as purok, ";
        $sql .= "{$this->tblRepresentative} as household ";
        $sql .= "where household.representative_eval_id = '{$this->evaluation_list_aid}' ";
        $sql .= "and household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_eval_id = eval.evaluation_list_aid ";
        $sql .= "order by household.representative_house_number asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllRepresentatives()
    {
        $sql = "select * from {$this->tblRepresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok, ";
        $sql .= "{$this->tblEnableEvaluation} as eval ";
        $sql .= "where household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "and household.representative_eval_id = eval.evaluation_list_aid ";
        $sql .= "order by household.representative_house_number asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitRepresentatives($start, $total)
    {
        $sql = "select * from {$this->tblRepresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok, ";
        $sql .= "{$this->tblEnableEvaluation} as eval ";
        $sql .= "where household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "and household.representative_eval_id = eval.evaluation_list_aid ";
        $sql .= "order by household.representative_house_number asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }
}
