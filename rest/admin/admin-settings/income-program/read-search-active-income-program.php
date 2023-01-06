<?php
try {
    include_once("../../../common/package.php");
    include_once("IncomeProgram.php");
    include_once("functions-income-program.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $program = new IncomeProgram($connection);

    $search = trim(filter_var($data["search"], FILTER_SANITIZE_STRING));

    $result = checkReadSearchActive($program, trim($search));

    $data = getResultData($result);

    Response::sendResponse(true, "Search active program data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
