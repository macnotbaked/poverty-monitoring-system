<?php
try {
    include_once("../../../common/package.php");
    include_once("UnemploymentCriteria.php");
    include_once("functions-unemployment-criteria.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $criteria = new UnemploymentCriteria($connection);

    $criteria->unemployment_criteria_is_active = 1;
    $criteria->unemployment_criteria_program_id = filter_var($data["unemployment_criteria_program_id"], FILTER_SANITIZE_STRING);
    $criteria->unemployment_criteria_range_from = filter_var($data["unemployment_criteria_range_from"], FILTER_SANITIZE_STRING);
    $criteria->unemployment_criteria_range_to = filter_var($data["unemployment_criteria_range_to"], FILTER_SANITIZE_STRING);
    $criteria->unemployment_criteria_category = filter_var($data["unemployment_criteria_category"], FILTER_SANITIZE_STRING);
    $criteria->unemployment_criteria_created = date("Y-m-d");
    $criteria->unemployment_criteria_datetime = date("Y-m-d H:i:s");

    checkReadProgramAlreadyExist($criteria);

    $result = checkCreate($criteria);


    Response::sendResponse(true, "Create criteria success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
