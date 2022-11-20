<?php
try {
    include_once("../../../common/package.php");
    include_once("IncomeCriteria.php");
    include_once("functions-income-criteria.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $criteria = new IncomeCriteria($connection);

    $criteria->income_criteria_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $criteria->income_criteria_datetime = date("Y-m-d H:i:s");

    $result = checkArchive($criteria);

    Response::sendResponse(true, "Archive criteria success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}