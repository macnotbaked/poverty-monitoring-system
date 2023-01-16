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
        Response::sendResponse(true, "Empty Records (Barangay information).", []);
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

function getResultData($result)
{
    $data = [];
    while ($row = $result->fetch_assoc()) {
        extract($row);
        $list = [
            "barangay_aid" => $barangay_aid,
            "barangay_photo" => $barangay_photo,
            "barangay_name" => $barangay_name,
            "barangay_municipality" => $barangay_municipality,
            "barangay_province" => $barangay_province,
            "barangay_contact_person_primary" => $barangay_contact_person_primary,
            "barangay_contact_number_primary" => $barangay_contact_number_primary,
            "barangay_contact_person_secondary" => $barangay_contact_person_secondary,
            "barangay_contact_number_secondary" => $barangay_contact_number_secondary,
            "barangay_created" => $barangay_created,
            "barangay_datetime" => $barangay_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
