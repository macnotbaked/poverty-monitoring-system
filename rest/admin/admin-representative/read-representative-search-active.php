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

    $representative->representative_purok_id = filter_var($data["type"], FILTER_SANITIZE_STRING);

    $search = trim(filter_var($data["search"], FILTER_SANITIZE_STRING));

    $result = checkReadSearch($representative, trim($search));

    $data = getResultData($result);

    Response::sendResponse(true, "Search representative data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
