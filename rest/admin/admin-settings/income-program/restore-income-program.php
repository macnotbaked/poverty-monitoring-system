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

    $program->income_program_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $program->income_program_datetime = date("Y-m-d H:i:s");

    $result = checkRestore($program);

    Response::sendResponse(true, "Restore program success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}