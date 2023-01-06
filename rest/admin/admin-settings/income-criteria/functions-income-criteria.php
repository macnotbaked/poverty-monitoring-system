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
        Response::sendResponse(true, "Empty Records (All active income criteria).", []);
        exit();
    }
    return $result;
}

function checkReadLimitActive($object, $start, $total)
{
    $result = $object->readlimitActive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit active income criteria).", []);
        exit();
    }
    return $result;
}

function checkReadSearchActive($object, $search)
{
    $result = $object->readSearchActive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search active income criteria).", []);
        exit();
    }
    return $result;
}

function checkReadAllInactive($object)
{
    $result = $object->readAllInactive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive income criteria).", []);
        exit();
    }
    return $result;
}

function checkReadLimitInactive($object, $start, $total)
{
    $result = $object->readlimitInactive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit inactive income criteria).", []);
        exit();
    }
    return $result;
}

function checkReadSearchInactive($object, $search)
{
    $result = $object->readSearchInactive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search inactive income criteria).", []);
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
            "income_criteria_aid" => $income_criteria_aid,
            "income_criteria_is_active" => $income_criteria_is_active,
            "income_criteria_program_id" => $income_criteria_program_id,
            "income_criteria_range_from" => $income_criteria_range_from,
            "income_criteria_range_to" => $income_criteria_range_to,
            "income_criteria_category" => $income_criteria_category,
            "income_criteria_created" => $income_criteria_created,
            "income_criteria_datetime" => $income_criteria_datetime,

            "income_program_aid" => $income_program_aid,
            "income_program_is_active" => $income_program_is_active,
            "income_program_name" => $income_program_name,
            "income_program_description" => $income_program_description,
            "income_program_contact_person" => $income_program_contact_person,
            "income_program_contact_number" => $income_program_contact_number,
            "income_program_contact_email" => $income_program_contact_email,
            "income_program_created" => $income_program_created,
            "income_program_datetime" => $income_program_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
