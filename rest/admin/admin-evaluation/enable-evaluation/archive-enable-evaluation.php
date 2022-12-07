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

    $eval->evaluation_list_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $eval->evaluation_list_datetime = filter_var($data["evaluation_list_datetime"], FILTER_SANITIZE_STRING);

    $result = checkArchive($eval);

    Response::sendResponse(true, "Trainee evaluation successfuly turn off.", []);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
