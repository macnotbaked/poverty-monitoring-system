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
        Response::sendResponse(true, "Empty Records (All recommended programs).", []);
        exit();
    }
    return $result;
}

function checkReadLimit($object, $start, $total)
{
    $result = $object->readLimit($start, $total);
    if ($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records (Limit recommended programs).", []);
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
            "household_program_aid" => $household_program_aid,
            "household_program_is_active" => $household_program_is_active,
            "household_program_name" => $household_program_name,
            "household_program_description" => $household_program_description,
            "household_program_contact_person" => $household_program_contact_person,
            "household_program_contact_number" => $household_program_contact_number,
            "household_program_contact_email" => $household_program_contact_email,
            "household_program_created" => $household_program_created,
            "household_program_datetime" => $household_program_datetime,

            "income_program_aid" => $income_program_aid,
            "income_program_is_active" => $income_program_is_active,
            "income_program_name" => $income_program_name,
            "income_program_description" => $income_program_description,
            "income_program_contact_person" => $income_program_contact_person,
            "income_program_contact_number" => $income_program_contact_number,
            "income_program_contact_email" => $income_program_contact_email,
            "income_program_created" => $income_program_created,
            "income_program_datetime" => $income_program_datetime,

            "population_program_aid" => $population_program_aid,
            "population_program_is_active" => $population_program_is_active,
            "population_program_name" => $population_program_name,
            "population_program_description" => $population_program_description,
            "population_program_contact_person" => $population_program_contact_person,
            "population_program_contact_number" => $population_program_contact_number,
            "population_program_contact_email" => $population_program_contact_email,
            "population_program_created" => $population_program_created,
            "population_program_datetime" => $population_program_datetime,

            "unemployment_program_aid" => $unemployment_program_aid,
            "unemployment_program_is_active" => $unemployment_program_is_active,
            "unemployment_program_name" => $unemployment_program_name,
            "unemployment_program_description" => $unemployment_program_description,
            "unemployment_program_contact_person" => $unemployment_program_contact_person,
            "unemployment_program_contact_number" => $unemployment_program_contact_number,
            "unemployment_program_contact_email" => $unemployment_program_contact_email,
            "unemployment_program_created" => $unemployment_program_created,
            "unemployment_program_datetime" => $unemployment_program_datetime,

            "household_criteria_aid" => $household_criteria_aid,
            "household_criteria_is_active" => $household_criteria_is_active,
            "household_criteria_program_id" => $household_criteria_program_id,
            "household_criteria_range_from" => $household_criteria_range_from,
            "household_criteria_range_to" => $household_criteria_range_to,
            "household_criteria_category" => $household_criteria_category,
            "household_criteria_created" => $household_criteria_created,
            "household_criteria_datetime" => $household_criteria_datetime,

            "income_criteria_aid" => $income_criteria_aid,
            "income_criteria_is_active" => $income_criteria_is_active,
            "income_criteria_program_id" => $income_criteria_program_id,
            "income_criteria_range_from" => $income_criteria_range_from,
            "income_criteria_range_to" => $income_criteria_range_to,
            "income_criteria_category" => $income_criteria_category,
            "income_criteria_created" => $income_criteria_created,
            "income_criteria_datetime" => $income_criteria_datetime,

            "population_criteria_aid" => $population_criteria_aid,
            "population_criteria_is_active" => $population_criteria_is_active,
            "population_criteria_program_id" => $population_criteria_program_id,
            "population_criteria_range_from" => $population_criteria_range_from,
            "population_criteria_range_to" => $population_criteria_range_to,
            "population_criteria_category" => $population_criteria_category,
            "population_criteria_created" => $population_criteria_created,
            "population_criteria_datetime" => $population_criteria_datetime,

            "unemployment_criteria_aid" => $unemployment_criteria_aid,
            "unemployment_criteria_is_active" => $unemployment_criteria_is_active,
            "unemployment_criteria_program_id" => $unemployment_criteria_program_id,
            "unemployment_criteria_range_from" => $unemployment_criteria_range_from,
            "unemployment_criteria_range_to" => $unemployment_criteria_range_to,
            "unemployment_criteria_category" => $unemployment_criteria_category,
            "unemployment_criteria_created" => $unemployment_criteria_created,
            "unemployment_criteria_datetime" => $unemployment_criteria_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}
