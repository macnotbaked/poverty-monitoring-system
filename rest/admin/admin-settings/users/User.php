<?php
class Users
{
    public $users_aid;
    public $users_is_active;
    public $users_key;
    public $users_password;
    public $users_fname;
    public $users_mname;
    public $users_lname;
    public $users_email;
    public $users_phone;
    public $users_role;
    public $users_photo;
    public $users_created;
    public $users_datetime;

    public $connection;
    public $tblUsers;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUsers = "pms_users";
    }

    public function create()
    {
        $sql = "insert into {$this->tblUsers} ";
        $sql .= "( users_is_active, ";
        $sql .= "users_key, ";
        $sql .= "users_fname, ";
        $sql .= "users_mname, ";
        $sql .= "users_lname, ";
        $sql .= "users_email, ";
        $sql .= "users_phone, ";
        $sql .= "users_role, ";
        $sql .= "users_created, ";
        $sql .= "users_datetime ) values ( ";
        $sql .= "'{$this->users_is_active}', ";
        $sql .= "'{$this->users_key}', ";
        $sql .= "'{$this->users_fname}', ";
        $sql .= "'{$this->users_mname}', ";
        $sql .= "'{$this->users_lname}', ";
        $sql .= "'{$this->users_email}', ";
        $sql .= "'{$this->users_phone}', ";
        $sql .= "'{$this->users_role}', ";
        $sql .= "'{$this->users_created}', ";
        $sql .= "'{$this->users_datetime}' ) ";

        $result = $this->connection->query($sql);
        return $result;
    }


    public function readById()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 1 ";
        $sql .= "and users_aid = '{$this->users_aid}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readAll()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    // read all active users list

    public function readAllActive()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 1 ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitActive($start, $total)
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 1 ";
        $sql .= "order by users_lname asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchActive($search)
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 1 ";
        $sql .= "and (users_email like '{$search}%' ";
        $sql .= "or users_fname like '{$search}%' ";
        $sql .= "or users_mname like '{$search}%' ";
        $sql .= "or users_lname like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    // read all inactive users list

    public function readAllInactive()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 0 ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readLimitInactive($start, $total)
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 0 ";
        $sql .= "order by users_lname asc ";
        $sql .= "limit {$start}, {$total} ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function readSearchInactive($search)
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 0 ";
        $sql .= "and (users_email like '{$search}%' ";
        $sql .= "or users_fname like '{$search}%' ";
        $sql .= "or users_mname like '{$search}%' ";
        $sql .= "or users_lname like '{$search}%' ";
        $sql .= ") ";
        $sql .= "order by users_lname asc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function update()
    {
        $sql = "update {$this->tblUsers} set ";
        $sql .= "users_fname = '{$this->users_fname}', ";
        $sql .= "users_mname = '{$this->users_mname}', ";
        $sql .= "users_lname = '{$this->users_lname}', ";
        $sql .= "users_email = '{$this->users_email}', ";
        $sql .= "users_phone = '{$this->users_phone}', ";
        $sql .= "users_role = '{$this->users_role}', ";
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
    public function updatePhoto()
    {
        $sql = "update {$this->tblUsers} set ";
        $sql .= "users_photo = '{$this->users_photo}', ";
        $sql .= "users_datetime = '{$this->users_datetime}' ";
        $sql .= "where users_aid = '{$this->users_aid}' ";

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
        $sql = "delete from {$this->tblUsers} ";
        $sql .= "where users_aid  = '{$this->users_aid}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function archive()
    {
        $sql = "update {$this->tblUsers} set ";
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

    public function restore()
    {
        $sql = "update {$this->tblUsers} set ";
        $sql .= "users_is_active = '1', ";
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

    public function readLogin()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_is_active = 1 ";
        $sql .= "and users_email = '{$this->users_email}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function readKey()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_key = '{$this->users_key}' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function updateNewPassword()
    {
        $sql = "update {$this->tblUsers} set ";
        $sql .= "users_key = '', ";
        $sql .= "users_password = '{$this->users_password}', ";
        $sql .= "users_is_active = 1, ";
        $sql .= "users_datetime = '{$this->users_datetime}' ";

        $sql .= "where users_key = '{$this->users_key}' ";
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function updateForgotPassword()
    {
        $sql = "update {$this->tblUsers} set ";
        $sql .= "users_key = '{$this->users_key}', ";
        $sql .= "users_datetime = '{$this->users_datetime}' ";
        $sql .= "where users_email = '{$this->users_email}' ";
        $sql .= "and users_is_active = 1 ";
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if ($c_affected > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function isEmailExist()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_email = '{$this->users_email}' ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function isUserActive()
    {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_email = '{$this->users_email}' ";
        $sql .= "and users_is_active = 0 ";
        $result = $this->connection->query($sql);

        return $result;
    }
}
