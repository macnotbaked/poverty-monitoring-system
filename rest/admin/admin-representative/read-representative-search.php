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


    $search = trim(filter_var($data["search"], FILTER_SANITIZE_STRING));

    $result = checkReadSearchActive($representative, trim($search));

    $data = getResultData($result);

    Response::sendResponse(true, "Search representative data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
