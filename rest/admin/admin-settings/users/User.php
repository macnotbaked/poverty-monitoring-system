<?php
class Users
{
    public $users_aid;
    public $users_is_active;
    public $users_fname;
    public $users_mname;
    public $users_lname;
    public $users_email;
    public $users_phone;
    public $users_gender;
    public $users_role_id;
    public $users_created;
    public $users_datetime;

    public $connection;
    public $tblusers;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblusers = "pms_users";
    }

    public function create()
    {
        $sql = "insert into {$this->tblusers} ";
        $sql .= "( users_is_active, ";
        $sql .= "users_fname, ";
        $sql .= "users_mname, ";
        $sql .= "users_lname, ";
        $sql .= "users_email, ";
        $sql .= "users_phone, ";
        $sql .= "users_gender, ";
        $sql .= "users_role_id, ";
        $sql .= "users_created, ";
        $sql .= "users_datetime ) values ( ";
        $sql .= "'{$this->users_is_active}', ";
        $sql .= "'{$this->users_fname}', ";
        $sql .= "'{$this->users_mname}', ";
        $sql .= "'{$this->users_lname}', ";
        $sql .= "'{$this->users_email}', ";
        $sql .= "'{$this->users_phone}', ";
        $sql .= "'{$this->users_gender}', ";
        $sql .= "'{$this->users_role_id}', ";
        $sql .= "'{$this->users_created}', ";
        $sql .= "'{$this->users_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblusers} ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }
    public function readAllActive()
    {
        $sql = "select * from {$this->tblusers} ";
        $sql .= "where users_is_active = 1 ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }
    public function readAllInactive()
    {
        $sql = "select * from {$this->tblusers} ";
        $sql .= "where users_is_active = 0 ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblusers} set ";
        $sql .= "users_fname = '{$this->users_fname}', ";
        $sql .= "users_mname = '{$this->users_mname}', ";
        $sql .= "users_lname = '{$this->users_lname}', ";
        $sql .= "users_email = '{$this->users_email}', ";
        $sql .= "users_phone = '{$this->users_phone}', ";
        $sql .= "users_gender = '{$this->users_gender}', ";
        $sql .= "users_role_id = '{$this->users_role_id}', ";
        $sql .= "users_datetime = '{$this->users_datetime}' ";
        $sql .= "where users_aid  = '{$this->users_aid}' ";

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
        $sql = "delete from {$this->tblusers} ";
        $sql .= "where users_aid  = '{$this->users_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function archive()
    {
        $sql = "update {$this->tblRole} set ";
        $sql .= "users_is_active = '0', ";
        $sql .= "users_datetime = '{$this->users_datetime}' ";
        $sql .= "where users_aid  = '{$this->users_aid}' ";

        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }
}
