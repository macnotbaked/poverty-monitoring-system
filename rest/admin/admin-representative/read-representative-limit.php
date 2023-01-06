<?php
try {
    include_once("../../common/package.php");
    include_once("Representative.php");
    include_once("functions-representative.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $representative = new Representative($connection);

    $start = trim(filter_var($data["start"], FILTER_SANITIZE_STRING));
    $total = trim(filter_var($data["total"], FILTER_SANITIZE_STRING));

    $result = checkReadLimit($representative, $start, $total);

    $data = getResultData($result);

    Response::sendResponse(true, "Limit representative data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
