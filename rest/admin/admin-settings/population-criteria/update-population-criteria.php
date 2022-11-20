<?php
try {
    include_once("../../../common/package.php");
    include_once("PopulationCriteria.php");
    include_once("functions-population-criteria.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $criteria = new PopulationCriteria($connection);

    $population_criteria_program_id_old = filter_var($data["population_criteria_program_id_old"], FILTER_SANITIZE_STRING);
    $population_criteria_range_from_old = filter_var($data["population_criteria_range_from_old"], FILTER_SANITIZE_STRING);
    $population_criteria_range_to_old = filter_var($data["population_criteria_range_to_old"], FILTER_SANITIZE_STRING);

    $criteria->population_criteria_aid = filter_var($data["population_criteria_aid"], FILTER_SANITIZE_STRING);
    $criteria->population_criteria_program_id = filter_var($data["population_criteria_program_id"], FILTER_SANITIZE_STRING);
    $criteria->population_criteria_range_from = filter_var($data["population_criteria_range_from"], FILTER_SANITIZE_STRING);
    $criteria->population_criteria_range_to = filter_var($data["population_criteria_range_to"], FILTER_SANITIZE_STRING);
    $criteria->population_criteria_datetime = date("Y-m-d H:i:s");

    if ($population_criteria_program_id_old != $criteria->population_criteria_program_id || $population_criteria_range_from_old != $criteria->population_criteria_range_from || $population_criteria_range_to_old != $criteria->population_criteria_range_to) {
        checkReadProgramAlreadyExist($criteria);
    }

    // if ($population_criteria_range_from_old != $criteria->population_criteria_range_from) {
    //     checkReadFromAlreadyExist($criteria);
    // }

    // if ($population_criteria_range_to_old != $criteria->population_criteria_range_to) {
    //     checkReadToAlreadyExist($criteria);
    // }

    $result = checkUpdate($criteria);

    Response::sendResponse(true, "Update criteria success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
