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

    $result = checkReadAllActive($criteria);

    $data = getResultData($result);

    Response::sendResponse(true, "All program for unemployment criteria data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
