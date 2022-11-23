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
        Response::sendResponse(true, "Empty Records (All sitio).", []);
        exit();
    }
    return $result;
}

function checkReadLimit($object, $start, $total)
{
    $result = $object->readLimit($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit sitio).", []);
        exit();
    }
    return $result;
}

function checkReadSearch($object, $search)
{
    $result = $object->readSearch($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search active sitio).", []);
        exit();
    }
    return $result;
}

function checkReadAllInactive($object)
{
    $result = $object->readAllInactive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive sitio).", []);
        exit();
    }
    return $result;
}

function checkReadLimitInactive($object, $start, $total)
{
    $result = $object->readLimitInactive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit inactive sitio).", []);
        exit();
    }
    return $result;
}

function checkReadSearchInactive($object, $search)
{
    $result = $object->readSearchInactive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search inactive sitio).", []);
        exit();
    }
    return $result;
}

function checkReadById($object)
{
    $result = $object->readById();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Active purok by ID).", []);
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

function checkReadAlreadyExist($object, $role)
{
    $result = $object->isAlreadyExist();
    if ($result->num_rows > 0) {
        Response::sendResponse(false, "{$role} already exist.", []);
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
            "sitio_aid" => $sitio_aid,
            "sitio_is_active" => $sitio_is_active,
            "sitio_name" => $sitio_name,
            "sitio_created" => $sitio_created,
            "sitio_datetime" => $sitio_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
