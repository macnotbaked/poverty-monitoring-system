<?php
try {
    include_once("../../../common/package.php");
    include_once("UnemploymentProgram.php");
    include_once("functions-unemployment-program.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $program = new UnemploymentProgram($connection);

    $start = trim(filter_var($data["start"], FILTER_SANITIZE_STRING));
    $total = trim(filter_var($data["total"], FILTER_SANITIZE_STRING));

    $result = checkReadLimitActive($program, $start, $total);

    $data = getResultData($result);

    Response::sendResponse(true, "Recommended program for unemployment data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}