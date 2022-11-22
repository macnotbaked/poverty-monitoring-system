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
        Response::sendResponse(true, "Empty Records (All active household criteria).", []);
        exit();
    }
    return $result;
}

function checkReadLimitActive($object, $start, $total)
{
    $result = $object->readlimitActive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit active household criteria).", []);
        exit();
    }
    return $result;
}

function checkReadSearchActive($object, $search)
{
    $result = $object->readSearchActive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search active household criteria).", []);
        exit();
    }
    return $result;
}

function checkReadAllInctive($object)
{
    $result = $object->readAllInctive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive household criteria).", []);
        exit();
    }
    return $result;
}

function checkReadLimitInctive($object, $start, $total)
{
    $result = $object->readlimitInctive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit inactive household criteria).", []);
        exit();
    }
    return $result;
}

function checkReadSearchInctive($object, $search)
{
    $result = $object->readSearchInctive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search inactive household criteria).", []);
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

function checkReadProgramAlreadyExist($object)
{
    $result = $object->isProgramAlreadyExist();
    if ($result->num_rows > 0) {
        Response::sendResponse(false, "Criteria for the program already exist.", []);
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
            "household_criteria_aid" => $household_criteria_aid,
            "household_criteria_is_active" => $household_criteria_is_active,
            "household_criteria_program_id" => $household_criteria_program_id,
            "household_criteria_range_from" => $household_criteria_range_from,
            "household_criteria_range_to" => $household_criteria_range_to,
            "household_criteria_category" => $household_criteria_category,
            "household_criteria_created" => $household_criteria_created,
            "household_criteria_datetime" => $household_criteria_datetime,

            "household_program_aid" => $household_program_aid,
            "household_program_is_active" => $household_program_is_active,
            "household_program_name" => $household_program_name,
            "household_program_description" => $household_program_description,
            "household_program_contact_person" => $household_program_contact_person,
            "household_program_contact_number" => $household_program_contact_number,
            "household_program_contact_email" => $household_program_contact_email,
            "household_program_created" => $household_program_created,
            "household_program_datetime" => $household_program_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
