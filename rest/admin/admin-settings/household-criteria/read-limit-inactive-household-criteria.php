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

    $start = trim(filter_var($data["start"], FILTER_SANITIZE_STRING));
    $total = trim(filter_var($data["total"], FILTER_SANITIZE_STRING));

    $result = checkReadLimitInactive($criteria, $start, $total);

    $data = getResultData($result);

    Response::sendResponse(true, "Limit program for household criteria data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
