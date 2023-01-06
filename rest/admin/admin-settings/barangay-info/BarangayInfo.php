<?php
class BarangayInfo
{
    public $barangay_aid;
    public $barangay_name;
    public $barangay_municipality;
    public $barangay_province;
    public $barangay_contact_person_primary;
    public $barangay_contact_number_primary;
    public $barangay_contact_person_secondary;
    public $barangay_contact_number_secondary;
    public $barangay_photo;
    public $barangay_created;
    public $barangay_datetime;

    public $connection;
    public $tblBarangay;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBarangay = "pms_barangay";
    }

    public function create()
    {
        $sql = "insert into {$this->tblBarangay} ";
        $sql .= "( barangay_name, ";
        $sql .= "barangay_municipality, ";
        $sql .= "barangay_province, ";
        $sql .= "barangay_contact_person_primary, ";
        $sql .= "barangay_contact_number_primary, ";
        $sql .= "barangay_contact_person_secondary, ";
        $sql .= "barangay_contact_number_secondary, ";
        $sql .= "barangay_photo, ";
        $sql .= "barangay_created, ";
        $sql .= "barangay_datetime ) values ( ";
        $sql .= "'{$this->barangay_name}', ";
        $sql .= "'{$this->barangay_municipality}', ";
        $sql .= "'{$this->barangay_province}', ";
        $sql .= "'{$this->barangay_contact_person_primary}', ";
        $sql .= "'{$this->barangay_contact_number_primary}', ";
        $sql .= "'{$this->barangay_contact_person_secondary}', ";
        $sql .= "'{$this->barangay_contact_number_secondary}', ";
        $sql .= "'{$this->barangay_photo}', ";
        $sql .= "'{$this->barangay_created}', ";
        $sql .= "'{$this->barangay_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblBarangay} ";
        $sql .= "order by barangay_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblBarangay} set ";
        $sql .= "barangay_name = '{$this->barangay_name}', ";
        $sql .= "barangay_municipality = '{$this->barangay_municipality}', ";
        $sql .= "barangay_province = '{$this->barangay_province}', ";
        $sql .= "barangay_contact_person_primary = '{$this->barangay_contact_person_primary}', ";
        $sql .= "barangay_contact_number_primary = '{$this->barangay_contact_number_primary}', ";
        $sql .= "barangay_contact_person_secondary = '{$this->barangay_contact_person_secondary}', ";
        $sql .= "barangay_contact_number_secondary = '{$this->barangay_contact_number_secondary}', ";
        $sql .= "barangay_photo = '{$this->barangay_photo}', ";
        $sql .= "barangay_datetime = '{$this->barangay_datetime}' ";
        $sql .= "where barangay_aid  = '{$this->barangay_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }
}
