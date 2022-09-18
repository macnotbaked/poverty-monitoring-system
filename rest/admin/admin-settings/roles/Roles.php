<?php
class Roles
{
    public $roles_aid;
    public $roles_name;
    public $roles_created;
    public $roles_datetime;

    public $connection;
    public $tblRoles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRoles = "pms_roles";
    }

    public function create()
    {
        $sql = "insert into {$this->tblRoles} ";
        $sql .= "( roles_name, ";
        $sql .= "roles_created, ";
        $sql .= "roles_datetime ) values ( ";
        $sql .= "'{$this->roles_name}', ";
        $sql .= "'{$this->roles_created}', ";
        $sql .= "'{$this->roles_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblRoles} ";
        $sql .= "order by roles_name asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblRoles} set ";
        $sql .= "roles_name = '{$this->roles_name}', ";
        $sql .= "roles_datetime = '{$this->roles_datetime}' ";
        $sql .= "where roles_aid  = '{$this->roles_aid}' ";

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
        $sql = "delete from {$this->tblRoles} ";
        $sql .= "where roles_aid  = '{$this->roles_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function isAccountExist()
    {
        $sql = "select * from {$this->tblAccount} ";
        $sql .= "where settings_account_role  = '{$this->settings_role_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }
}
