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

function checkReadAllActive($object)
{
    $result = $object->readAllActive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All active unemployment program).", []);
        exit();
    }
    return $result;
}

function checkReadLimitActive($object, $start, $total)
{
    $result = $object->readlimitActive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit active unemployment program).", []);
        exit();
    }
    return $result;
}

function checkReadSearchActive($object, $search)
{
    $result = $object->readSearchActive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search active unemployment program).", []);
        exit();
    }
    return $result;
}

function checkReadAllInactive($object)
{
    $result = $object->readAllInactive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive unemployment program).", []);
        exit();
    }
    return $result;
}

function checkReadLimitInactive($object, $start, $total)
{
    $result = $object->readlimitInactive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit inactive unemployment program).", []);
        exit();
    }
    return $result;
}

function checkReadSearchInactive($object, $search)
{
    $result = $object->readSearchInactive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search inactive unemployment program).", []);
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

function checkArchive($object)
{
    $result = $object->archive();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query (Archive).", []);
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

function checkReadAlreadyExist($object, $program)
{
    $result = $object->isAlreadyExist();
    if ($result->num_rows > 0) {
        Response::sendResponse(false, "{$program} already exist.", []);
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
            "unemployment_program_aid" => $unemployment_program_aid,
            "unemployment_program_is_active" => $unemployment_program_is_active,
            "unemployment_program_name" => $unemployment_program_name,
            "unemployment_program_description" => $unemployment_program_description,
            "unemployment_program_contact_person" => $unemployment_program_contact_person,
            "unemployment_program_contact_number" => $unemployment_program_contact_number,
            "unemployment_program_contact_email" => $unemployment_program_contact_email,
            "unemployment_program_created" => $unemployment_program_created,
            "unemployment_program_datetime" => $unemployment_program_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
