<?php
try {
    include_once("../../../common/package.php");
    include_once("EnableEvaluation.php");
    include_once("functions-enable-evaluation.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $eval = new EnableEvaluation($connection);

    $result = checkDelete($eval);

    Response::sendResponse(true, "Trainee evaluation successfuly deleted.", []);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
