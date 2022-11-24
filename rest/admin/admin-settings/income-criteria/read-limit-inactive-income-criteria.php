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

    $start = trim(filter_var($data["start"], FILTER_SANITIZE_STRING));
    $total = trim(filter_var($data["total"], FILTER_SANITIZE_STRING));

    $result = checkReadLimitInactive($criteria, $start, $total);

    $data = getResultData($result);

    Response::sendResponse(true, "Limit program for income criteria data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}