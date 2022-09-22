<?php

function checkConnection()
{
    $db = new Database();
    $connection = $db->getConnection();
    if ($connection == null) {
        Response::sendResponse(false, "Database connection error.", $connection);
        exit();
    }
    return $connection;
}

function checkInputData($data)
{
    if (empty($data)) {
        Response::sendResponse(false, "404: Data not found.", []);
        exit();
    }
}

function checkCreate($object)
{
    $result = $object->create();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query (Create).", []);
        exit();
    }
    return $result;
}

function checkReadAll($object)
{
    $result = $object->readAll();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All users).", []);
        exit();
    }
    return $result;
}

function checkReadAllActive($object)
{
    $result = $object->readAllActive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All active users).", []);
        exit();
    }
    return $result;
}

function checkReadAllInactive($object)
{
    $result = $object->readAllInactive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive users).", []);
        exit();
    }
    return $result;
}

function checkUpdate($object)
{
    $result = $object->update();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query (Update).", []);
        exit();
    }
    return $result;
}

function checkDelete($object)
{
    $result = $object->delete();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query (Delete).", []);
        exit();
    }
    return $result;
}

function checkArchive($object)
{
    $result = $object->archive();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query (Archive).", []);
        exit();
    }
    return $result;
}

function checkReadKey($object)
{
    $result = $object->readKey();
    if ($result->num_rows == 0) {
        Response::sendResponse(false, "The link is Invalid.", []);
        exit();
    }
    return $result;
}

function checkNewPassword($object)
{
    $result = $object->updateNewPassword();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query (Update new password)", []);
        exit();
    }
    return $result;
}

function getResultData($result)
{
    $data = [];
    while ($row = $result->fetch_assoc()) {
        extract($row);
        $list = [
            "users_aid" => $users_aid,
            "users_is_active" => $users_is_active,
            "users_key" => $users_key,
            "users_password" => $users_password,
            "users_fname" => $users_fname,
            "users_mname" => $users_mname,
            "users_lname" => $users_lname,
            "users_email" => $users_email,
            "users_phone" => $users_phone,
            "users_gender" => $users_gender,
            "users_role_id" => $users_role_id,
            "users_created" => $users_created,
            "users_datetime" => $users_datetime,

            "roles_aid" => $roles_aid,
            "roles_name" => $roles_name,
        ];
        array_push($data, $list);
    }
    return $data;
}
