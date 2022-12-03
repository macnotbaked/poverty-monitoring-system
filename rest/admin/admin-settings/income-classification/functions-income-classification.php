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
        Response::sendResponse(true, "Empty Records (All active income classification).", []);
        exit();
    }
    return $result;
}

function checkReadLimit($object, $start, $total)
{
    $result = $object->readLimit($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit active income classification).", []);
        exit();
    }
    return $result;
}

function checkReadSearch($object, $search)
{
    $result = $object->readSearch($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search income classification).", []);
        exit();
    }
    return $result;
}

function checkReadAllInactive($object)
{
    $result = $object->readAllInactive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive income classification).", []);
        exit();
    }
    return $result;
}

function checkReadLimitInactive($object, $start, $total)
{
    $result = $object->readLimitInactive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit inactive income classification).", []);
        exit();
    }
    return $result;
}

function checkReadSearchInactive($object, $search)
{
    $result = $object->readSearchInactive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search inactive income classification).", []);
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

function getResultData($result)
{
    $data = [];
    while ($row = $result->fetch_assoc()) {
        extract($row);
        $list = [
            "monthly_income_aid" => $monthly_income_aid,
            "monthly_income_is_active" => $monthly_income_is_active,
            "monthly_income_name" => $monthly_income_name,
            "monthly_income_from" => $monthly_income_from,
            "monthly_income_to" => $monthly_income_to,
            "monthly_income_created" => $monthly_income_created,
            "monthly_income_datetime" => $monthly_income_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
