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

    $program->population_program_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $program->population_program_datetime = date("Y-m-d H:i:s");

    $result = checkArchive($program);

    Response::sendResponse(true, "Archive program success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
