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

function checkReadAllCount($object)
{
    $result = $object->readAllCount();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Count all household).", []);
        exit();
    }
    return $result;
}

function checkReadAll($object)
{
    $result = $object->readAll();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All household).", []);
        exit();
    }
    return $result;
}

function checkReadLimit($object, $start, $total)
{
    $result = $object->readLimit($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit household).", []);
        exit();
    }
    return $result;
}

function checkReadSearch($object, $search)
{
    $result = $object->readSearch($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search active household).", []);
        exit();
    }
    return $result;
}

function checkReadAllInactive($object)
{
    $result = $object->readAllInactive();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (All inactive household).", []);
        exit();
    }
    return $result;
}

function checkReadLimitInactive($object, $start, $total)
{
    $result = $object->readLimitInactive($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit inactive household).", []);
        exit();
    }
    return $result;
}

function checkReadSearchInactive($object, $search)
{
    $result = $object->readSearchInactive($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search inactive household).", []);
        exit();
    }
    return $result;
}

function checkReadById($object)
{
    $result = $object->readById();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Active household by ID).", []);
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

function checkReadAlreadyExist($object, $name, $household)
{
    $result = $object->isAlreadyExist();
    if ($result->num_rows > 0) {
        Response::sendResponse(false, "{$name} {$household} already exist.", []);
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
            "representative_aid" => $representative_aid,
            "representative_purok_id" => $representative_purok_id,
            "representative_is_active" => $representative_is_active,
            "representative_name" => $representative_name,
            "representative_contact" => $representative_contact,
            "representative_house_number" => $representative_house_number,
            "representative_total_people" => $representative_total_people,
            "representative_total_underage" => $representative_total_underage,
            "representative_total_midage" => $representative_total_midage,
            "representative_total_adult" => $representative_total_adult,
            "representative_total_seniors" => $representative_total_seniors,
            "representative_total_pwd" => $representative_total_pwd,
            "representative_total_elem" => $representative_total_elem,
            "representative_total_highschool" => $representative_total_highschool,
            "representative_total_college" => $representative_total_college,
            "representative_household_living_id" => $representative_household_living_id,
            "representative_monthly_income_id" => $representative_monthly_income_id,
            "representative_bill_expenses_id" => $representative_bill_expenses_id,
            "representative_food_expenses_id" => $representative_food_expenses_id,
            "representative_total_able_work" => $representative_total_able_work,
            "representative_total_employed" => $representative_total_employed,
            "representative_created" => $representative_created,
            "representative_datetime" => $representative_datetime,

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
