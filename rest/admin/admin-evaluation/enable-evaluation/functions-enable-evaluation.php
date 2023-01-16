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

function checkReadAll($object)
{
    $result = $object->readAll();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (Evaluation List).", []);
        exit();
    }
    return $result;
}

function checkReadAllEvaluation($object)
{
    $result = $object->readAllEvaluation();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (All evaluation list).", []);
        exit();
    }
    return $result;
}

function checkReadLimitEvaluation($object, $start, $total)
{
    $result = $object->readLimitEvaluation($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (Limit evaluation list).", []);
        exit();
    }
    return $result;
}

function checkReadSearchEvaluation($object, $search)
{
    $result = $object->readSearchEvaluation($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Search evaluation list).", []);
        exit();
    }
    return $result;
}

function checkReadActiveEvaluation($object)
{
    $result = $object->readActiveEvaluation();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (Active evaluation).", []);
        exit();
    }
    return $result;
}

function checkReadAllCount($object)
{
    $result = $object->readAllCount();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (All evaluation representative).", []);
        exit();
    }
    return $result;
}

function checkReadCountRepresentativeEvaluation($object)
{
    $result = $object->readCountRepresentativeEvaluation();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (Count all representatives evaluation list).", []);
        exit();
    }
    return $result;
}

function checkReadAllRepresentativeEvaluation($object)
{
    $result = $object->readAllRepresentativeEvaluation();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (All representatives evaluation list).", []);
        exit();
    }
    return $result;
}

function checkReadAllRepresentatives($object)
{
    $result = $object->readAllRepresentatives();
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (All representatives evaluation list).", []);
        exit();
    }
    return $result;
}

function checkReadLimitRepresentatives($object, $start, $total)
{
    $result = $object->readLimitRepresentatives($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (Limit representatives evaluation list).", []);
        exit();
    }
    return $result;
}

function checkReadSearchRepresentatives($object, $search)
{
    $result = $object->readSearchRepresentatives($search);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Record (Limit representatives evaluation list).", []);
        exit();
    }
    return $result;
}

function checkCreate($object)
{
    $result = $object->create();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query. (create)", []);
        exit();
    }
    return $result;
}

function checkCopyOldRepresentative($object, $lastId)
{
    $result = $object->copyOldRepresentative($lastId);
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query. (copy representative)", []);
        exit();
    }
    return $result;
}

function checkArchive($object)
{
    $result = $object->archive();
    if (!$result) {
        Response::sendResponse(false, "Please check your sql query. (delete)", []);
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
            "evaluation_list_aid" => $evaluation_list_aid,
            "evaluation_list_is_active" => $evaluation_list_is_active,
            "evaluation_list_created" => $evaluation_list_created,
            "evaluation_list_datetime" => $evaluation_list_datetime,

            "representative_aid" => $representative_aid,
            "representative_eval_id" => $representative_eval_id,
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
            "representative_is_in_danger_area" => $representative_is_in_danger_area,
            "representative_monthly_income" => $representative_monthly_income,
            "representative_total_able_work" => $representative_total_able_work,
            "representative_total_employed" => $representative_total_employed,
            "representative_created" => $representative_created,
            "representative_datetime" => $representative_datetime,
            "total" => $total,

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
