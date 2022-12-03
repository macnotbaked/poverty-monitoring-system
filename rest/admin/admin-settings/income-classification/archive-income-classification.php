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

    $classification->monthly_income_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $classification->monthly_income_datetime = date("Y-m-d H:i:s");

    $result = checkArchive($classification);

    Response::sendResponse(true, "Archive income classification success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
