<?php
try {
    include_once("../../../common/package.php");
    include_once("IncomeClassification.php");
    include_once("functions-income-classification.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $classsification = new IncomeClassification($connection);

    $start = trim(filter_var($data["start"], FILTER_SANITIZE_STRING));
    $total = trim(filter_var($data["total"], FILTER_SANITIZE_STRING));

    $result = checkReadLimitInactive($classification, $start, $total);

    $data = getResultData($result);

    Response::sendResponse(true, "Limit income classification data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
