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

    $program->unemployment_program_aid = filter_var($data["unemployment_program_aid"], FILTER_SANITIZE_STRING);
    $program->unemployment_program_name = filter_var($data["unemployment_program_name"], FILTER_SANITIZE_STRING);
    $unemployment_program_name_old = filter_var($data["unemployment_program_name_old"], FILTER_SANITIZE_STRING);
    $program->unemployment_program_description = filter_var($data["unemployment_program_description"], FILTER_SANITIZE_STRING);
    $program->unemployment_program_contact_person = filter_var($data["unemployment_program_contact_person"], FILTER_SANITIZE_STRING);
    $program->unemployment_program_contact_number = filter_var($data["unemployment_program_contact_number"], FILTER_SANITIZE_STRING);
    $program->unemployment_program_contact_email = filter_var($data["unemployment_program_contact_email"], FILTER_SANITIZE_STRING);
    $program->unemployment_program_datetime = date("Y-m-d H:i:s");

    if ($unemployment_program_name_old != $program->unemployment_program_name) {
        checkReadAlreadyExist($program, $program->unemployment_program_name);
    }

    $result = checkUpdate($program);

    Response::sendResponse(true, "Update program success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
