<?php
try {
    include_once("../../../common/package.php");
    include_once("HouseholdCriteria.php");
    include_once("functions-household-criteria.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $criteria = new HouseholdCriteria($connection);

    $household_criteria_program_id_old = filter_var($data["household_criteria_program_id_old"], FILTER_SANITIZE_STRING);
    $household_criteria_range_from_old = filter_var($data["household_criteria_range_from_old"], FILTER_SANITIZE_STRING);
    $household_criteria_range_to_old = filter_var($data["household_criteria_range_to_old"], FILTER_SANITIZE_STRING);

    $criteria->household_criteria_aid = filter_var($data["household_criteria_aid"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_program_id = filter_var($data["household_criteria_program_id"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_range_from = filter_var($data["household_criteria_range_from"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_range_to = filter_var($data["household_criteria_range_to"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_datetime = date("Y-m-d H:i:s");

    if ($household_criteria_program_id_old != $criteria->household_criteria_program_id || $household_criteria_range_from_old != $criteria->household_criteria_range_from || $household_criteria_range_to_old != $criteria->household_criteria_range_to) {
        checkReadProgramAlreadyExist($criteria);
    }

    $result = checkUpdate($criteria);

    Response::sendResponse(true, "Update criteria success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
