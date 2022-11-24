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

    $criteria->unemployment_criteria_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $criteria->unemployment_criteria_datetime = date("Y-m-d H:i:s");

    $result = checkRestore($criteria);

    Response::sendResponse(true, "Restore criteria success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}