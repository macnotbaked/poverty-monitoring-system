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

    $representative->representative_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $representative->representative_datetime = filter_var($data["representative_datetime"], FILTER_SANITIZE_STRING);

    $result = checkRestore($representative);

    Response::sendResponse(true, "Restore representative success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
