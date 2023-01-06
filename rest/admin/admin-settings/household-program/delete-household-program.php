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

    $program->household_program_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);

    $result = checkDelete($program);

    Response::sendResponse(true, "Program successfuly deleted.", []);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
