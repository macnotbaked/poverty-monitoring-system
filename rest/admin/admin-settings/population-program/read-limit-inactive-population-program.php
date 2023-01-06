<?php
try {
    include_once("../../../common/package.php");
    include_once("PopulationProgram.php");
    include_once("functions-population-program.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $program = new PopulationProgram($connection);

    $start = trim(filter_var($data["start"], FILTER_SANITIZE_STRING));
    $total = trim(filter_var($data["total"], FILTER_SANITIZE_STRING));

    $result = checkReadLimitInactive($program, $start, $total);

    $data = getResultData($result);

    Response::sendResponse(true, "Recommended program for population data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
