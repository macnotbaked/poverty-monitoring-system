<?php
try {
    include_once("../../../common/package.php");
    include_once("HouseholdProgram.php");
    include_once("functions-household-program.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $program = new HouseholdProgram($connection);

    $result = checkReadAllActive($program);

    $data = getResultData($result);

    Response::sendResponse(true, "Recommended program for household data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
