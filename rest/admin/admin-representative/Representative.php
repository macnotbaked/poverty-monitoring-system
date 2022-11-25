<?php
class Representative
{
    public $representative_aid;
    public $representative_eval_id;
    public $representative_purok_id;
    public $representative_is_active;
    public $representative_name;
    public $representative_contact;
    public $representative_house_number;
    public $representative_total_people;
    public $representative_total_underage;
    public $representative_total_midage;
    public $representative_total_adult;
    public $representative_total_pwd;
    public $representative_total_elem;
    public $representative_total_highschool;
    public $representative_total_college;
    public $representative_household_living_id;
    public $representative_monthly_income_id;
    public $representative_bill_expenses_id;
    public $representative_food_expenses_id;
    public $representative_total_able_work;
    public $representative_total_employed;
    public $representative_created;
    public $representative_datetime;

    public $connection;
    public $tblRespresentative;
    public $tblSitio;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRespresentative = "pms_representative";
        $this->tblSitio = "pms_sitio";
    }

    public function create()
    {
        $sql = "insert into {$this->tblRespresentative} ";
        $sql .= "( representative_eval_id, ";
        $sql .= "representative_purok_id, ";
        $sql .= "representative_is_active, ";
        $sql .= "representative_name, ";
        $sql .= "representative_contact, ";
        $sql .= "representative_house_number, ";
        $sql .= "representative_total_people, ";
        $sql .= "representative_total_underage, ";
        $sql .= "representative_total_midage, ";
        $sql .= "representative_total_adult, ";
        $sql .= "representative_total_pwd, ";
        $sql .= "representative_total_elem, ";
        $sql .= "representative_total_highschool, ";
        $sql .= "representative_total_college, ";
        $sql .= "representative_household_living_id, ";
        $sql .= "representative_monthly_income_id, ";
        $sql .= "representative_bill_expenses_id, ";
        $sql .= "representative_food_expenses_id, ";
        $sql .= "representative_total_able_work, ";
        $sql .= "representative_total_employed, ";
        $sql .= "representative_created, ";
        $sql .= "representative_datetime ) values ( ";
        $sql .= "'{$this->representative_eval_id}', ";
        $sql .= "'{$this->representative_purok_id}', ";
        $sql .= "'{$this->representative_is_active}', ";
        $sql .= "'{$this->representative_name}', ";
        $sql .= "'{$this->representative_contact}', ";
        $sql .= "'{$this->representative_house_number}', ";
        $sql .= "'{$this->representative_total_people}', ";
        $sql .= "'{$this->representative_total_underage}', ";
        $sql .= "'{$this->representative_total_midage}', ";
        $sql .= "'{$this->representative_total_adult}', ";
        $sql .= "'{$this->representative_total_pwd}', ";
        $sql .= "'{$this->representative_total_elem}', ";
        $sql .= "'{$this->representative_total_highschool}', ";
        $sql .= "'{$this->representative_total_college}', ";
        $sql .= "'{$this->representative_household_living_id}', ";
        $sql .= "'{$this->representative_monthly_income_id}', ";
        $sql .= "'{$this->representative_bill_expenses_id}', ";
        $sql .= "'{$this->representative_food_expenses_id}', ";
        $sql .= "'{$this->representative_total_able_work}', ";
        $sql .= "'{$this->representative_total_employed}', ";
        $sql .= "'{$this->representative_created}', ";
        $sql .= "'{$this->representative_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblRespresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok ";
        $sql .= "where household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "order by household.representative_house_number asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimit($start, $total)
    {
        $sql = "select * from {$this->tblRespresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok ";
        $sql .= "where household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "order by household.representative_house_number asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearch($search)
    {
        $sql = "select * from {$this->tblRespresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok ";
        $sql .= "where household.representative_is_active = 1 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "and (household.representative_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by household.representative_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblRespresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok ";
        $sql .= "where household.representative_is_active = 0 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "order by household.representative_house_number asc ";
        $result = $this->connection->query($sql);

        return $result;
    }


    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblRespresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok ";
        $sql .= "where household.representative_is_active = 0 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "order by household.representative_house_number asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblRespresentative} as household, ";
        $sql .= "{$this->tblSitio} as purok ";
        $sql .= "where household.representative_is_active = 0 ";
        $sql .= "and household.representative_purok_id = purok.sitio_aid ";
        $sql .= "and household.representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and purok.sitio_aid = '{$this->representative_purok_id}' ";
        $sql .= "and (household.representative_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by household.representative_name asc ";
        $result = $this->connection->query($sql);


        return $result;
    }

    public function readById()
    {
        $sql = "select * from {$this->tblRespresentative} ";
        $sql .= "where representative_aid = '{$this->representative_aid}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblRespresentative} set ";
        $sql .= "representative_name = '{$this->representative_name}', ";
        $sql .= "representative_contact = '{$this->representative_contact}' ";
        $sql .= "representative_house_number = '{$this->representative_house_number}' ";
        $sql .= "representative_total_people = '{$this->representative_total_people}' ";
        $sql .= "representative_total_underage = '{$this->representative_total_underage}' ";
        $sql .= "representative_total_midage = '{$this->representative_total_midage}' ";
        $sql .= "representative_total_adult = '{$this->representative_total_adult}' ";
        $sql .= "representative_total_pwd = '{$this->representative_total_pwd}' ";
        $sql .= "representative_total_elem = '{$this->representative_total_elem}' ";
        $sql .= "representative_total_highschool = '{$this->representative_total_highschool}' ";
        $sql .= "representative_total_college = '{$this->representative_total_college}' ";
        $sql .= "representative_household_living_id = '{$this->representative_household_living_id}' ";
        $sql .= "representative_monthly_income_id = '{$this->representative_monthly_income_id}' ";
        $sql .= "representative_bill_expenses_id = '{$this->representative_bill_expenses_id}' ";
        $sql .= "representative_food_expenses_id = '{$this->representative_food_expenses_id}' ";
        $sql .= "representative_total_able_work = '{$this->representative_total_able_work}' ";
        $sql .= "representative_total_employed = '{$this->representative_total_employed}' ";
        $sql .= "where representative_aid  = '{$this->representative_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function arhive()
    {
        $sql = "update {$this->tblRespresentative} set ";
        $sql .= "representative_is_active = '0', ";
        $sql .= "representative_datetime = '{$this->representative_datetime}' ";
        $sql .= "where representative_aid = '{$this->representative_aid}' ";

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
        $sql = "update {$this->tblRespresentative} set ";
        $sql .= "representative_is_active = '1', ";
        $sql .= "representative_datetime = '{$this->representative_datetime}' ";
        $sql .= "where representative_aid = '{$this->representative_aid}' ";

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
        $sql = "delete from {$this->tblRespresentative} ";
        $sql .= "where representative_aid  = '{$this->representative_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function isAlreadyExist()
    {
        $sql = "select * from {$this->tblRespresentative} ";
        $sql .= "where representative_purok_id = '{$this->representative_purok_id}' ";
        $sql .= "and representative_name = '{$this->representative_name}' ";
        $sql .= "and representative_house_number = '{$this->representative_house_number}' ";
        $result = $this->connection->query($sql);

        return $result;
    }
}
