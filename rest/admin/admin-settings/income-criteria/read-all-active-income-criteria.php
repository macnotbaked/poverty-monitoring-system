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

    $result = checkReadAllActive($criteria);

    $data = getResultData($result);

    Response::sendResponse(true, "All program for income criteria data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
