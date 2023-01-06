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

    $program->unemployment_program_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $program->unemployment_program_datetime = date("Y-m-d H:i:s");

    $result = checkRestore($program);

    Response::sendResponse(true, "Restore program success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
