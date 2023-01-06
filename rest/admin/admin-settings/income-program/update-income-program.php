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

    $program->income_program_aid = filter_var($data["income_program_aid"], FILTER_SANITIZE_STRING);
    $program->income_program_name = filter_var($data["income_program_name"], FILTER_SANITIZE_STRING);
    $income_program_name_old = filter_var($data["income_program_name_old"], FILTER_SANITIZE_STRING);
    $program->income_program_description = filter_var($data["income_program_description"], FILTER_SANITIZE_STRING);
    $program->income_program_contact_person = filter_var($data["income_program_contact_person"], FILTER_SANITIZE_STRING);
    $program->income_program_contact_number = filter_var($data["income_program_contact_number"], FILTER_SANITIZE_STRING);
    $program->income_program_contact_email = filter_var($data["income_program_contact_email"], FILTER_SANITIZE_STRING);
    $program->income_program_datetime = date("Y-m-d H:i:s");

    if ($income_program_name_old != $program->income_program_name) {
        checkReadAlreadyExist($program, $program->income_program_name);
    }

    $result = checkUpdate($program);

    Response::sendResponse(true, "Update program success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
