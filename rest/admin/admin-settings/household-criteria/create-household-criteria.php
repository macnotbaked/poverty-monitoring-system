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

    $criteria->household_criteria_is_active = 1;
    $criteria->household_criteria_program_id = filter_var($data["household_criteria_program_id"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_range_from = filter_var($data["household_criteria_range_from"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_range_to = filter_var($data["household_criteria_range_to"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_category = filter_var($data["household_criteria_category"], FILTER_SANITIZE_STRING);
    $criteria->household_criteria_created = date("Y-m-d");
    $criteria->household_criteria_datetime = date("Y-m-d H:i:s");

    checkReadProgramAlreadyExist($criteria);

    $result = checkCreate($criteria);


    Response::sendResponse(true, "Create criteria success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
