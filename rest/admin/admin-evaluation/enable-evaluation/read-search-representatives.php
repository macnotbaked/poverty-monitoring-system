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

    $eval->representative_purok_id = filter_var($data["type"], FILTER_SANITIZE_STRING);

    $search = trim(filter_var($data["search"], FILTER_SANITIZE_STRING));

    $result = checkReadSearchRepresentatives($eval, trim($search));

    $data = getResultData($result);

    Response::sendResponse(true, "Search evaluation data found.", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
