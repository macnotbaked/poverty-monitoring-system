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

    $classsification->monthly_income_is_active  = 1;
    $classsification->monthly_income_name  = filter_var($data["monthly_income_name"], FILTER_SANITIZE_STRING);
    $classsification->monthly_income_from  = filter_var($data["monthly_income_from"], FILTER_SANITIZE_STRING);
    $classsification->monthly_income_to  = filter_var($data["monthly_income_to"], FILTER_SANITIZE_STRING);
    $classsification->monthly_income_created = date("Y-m-d");
    $classsification->monthly_income_datetime = date("Y-m-d H:i:s");

    $result = checkCreate($classsification);

    Response::sendResponse(true, "Create classsification success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
