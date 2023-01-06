<?php
try {
    include_once("../../../common/package.php");
    include_once("EnableEvaluation.php");
    include_once("functions-enable-evaluation.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $eval = new EnableEvaluation($connection);

    $result = checkReadAllEvaluation($eval);

    $data = getResultData($result);

    Response::sendResponse(true, "All evaluation data found.", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
