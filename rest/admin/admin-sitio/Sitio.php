<?php
class Sitio
{
    public $sitio_aid;
    public $sitio_is_active;
    public $sitio_name;
    public $sitio_created;
    public $sitio_datetime;

    public $connection;
    public $tblSitio;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSitio = "pms_sitio";
    }

    public function create()
    {
        $sql = "insert into {$this->tblSitio} ";
        $sql .= "( sitio_name, ";
        $sql .= "sitio_created, ";
        $sql .= "sitio_datetime ) values ( ";
        $sql .= "'{$this->sitio_name}', ";
        $sql .= "'{$this->sitio_created}', ";
        $sql .= "'{$this->sitio_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblSitio} ";
        $sql .= "where sitio_is_active = 1 ";
        $sql .= "order by sitio_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimit($start, $total)
    {
        $sql = "select * from {$this->tblSitio} ";
        $sql .= "where sitio_is_active = 1 ";
        $sql .= "order by sitio_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearch($search)
    {
        $sql = "select * from {$this->tblSitio} ";
        $sql .= "where (sitio_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "where sitio_is_active = 1 ";
        $sql .= "order by sitio_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblSitio} ";
        $sql .= "where sitio_is_active 0 ";
        $sql .= "order by sitio_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }


    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblSitio} ";
        $sql .= "where sitio_is_active 0 ";
        $sql .= "order by sitio_name asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblSitio} ";
        $sql .= "where (sitio_name like '{$search}%' ";
        $sql .= ") ";
        $sql .= "where sitio_is_active 0 ";
        $sql .= "order by sitio_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblSitio} set ";
        $sql .= "sitio_name = '{$this->sitio_name}', ";
        $sql .= "sitio_datetime = '{$this->sitio_datetime}' ";
        $sql .= "where sitio_aid  = '{$this->sitio_aid}' ";

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
        $sql = "update {$this->tblSitio} set ";
        $sql .= "sitio_is_active = '0', ";
        $sql .= "sitio_datetime = '{$this->sitio_datetime}' ";
        $sql .= "where sitio_aid = '{$this->sitio_aid}' ";

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
        $sql = "update {$this->tblSitio} set ";
        $sql .= "sitio_is_active = '1', ";
        $sql .= "sitio_datetime = '{$this->sitio_datetime}' ";
        $sql .= "where sitio_aid = '{$this->sitio_aid}' ";

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
        $sql = "delete from {$this->tblSitio} ";
        $sql .= "where sitio_aid  = '{$this->sitio_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
