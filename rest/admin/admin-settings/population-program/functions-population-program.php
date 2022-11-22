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
        Response::sendResponse(true, "Empty Records (All active population program).", []);
        exit();
    }
    return $result;
}

function checkReadLimitActive($object, $start, $total)
{
    $result = $object->readlimitActive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit active population program).", []);
        exit();
    }
    return $result;
}

function checkReadSearchActive($object, $search)
{
    $result = $object->readSearchActive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search active population program).", []);
        exit();
    }
    return $result;
}

function checkReadAllInactive($object)
{
    $result = $object->readAllInactive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive population program).", []);
        exit();
    }
    return $result;
}

function checkReadLimitInactive($object, $start, $total)
{
    $result = $object->readlimitInactive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit inactive population program).", []);
        exit();
    }
    return $result;
}

function checkReadSearchInactive($object, $search)
{
    $result = $object->readSearchInactive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search inactive population program).", []);
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

function checkRestore($object)
{
    $result = $object->restore();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query (Restore).", []);
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
            "population_program_aid" => $population_program_aid,
            "population_program_is_active" => $population_program_is_active,
            "population_program_name" => $population_program_name,
            "population_program_description" => $population_program_description,
            "population_program_contact_person" => $population_program_contact_person,
            "population_program_contact_number" => $population_program_contact_number,
            "population_program_contact_email" => $population_program_contact_email,
            "population_program_created" => $population_program_created,
            "population_program_datetime" => $population_program_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
