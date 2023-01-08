<?php
try {
    include_once("../../common/package.php");
    include_once("RecommendedPrograms.php");
    include_once("functions-recommended-program.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $recommended_program = new RecommendedPrograms($connection);

    $result = checkReadAllUnemploymentRecommendedProgram($recommended_program);

    $data = getResultData($result);

    Response::sendResponse(true, "All unemployment recommended program data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
