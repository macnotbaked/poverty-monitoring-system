<?php
try {
    include_once("../../common/package.php");
    include_once("Sitio.php");
    include_once("functions-sitio.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $sitio = new Sitio($connection);

    $sitio->sitio_aid  = filter_var($data["sitio_aid"], FILTER_SANITIZE_STRING);
    $sitio->sitio_name = filter_var($data["sitio_name"], FILTER_SANITIZE_STRING);
    $sitio->sitio_datetime = filter_var($data["sitio_datetime"], FILTER_SANITIZE_STRING);

    $result = checkUpdate($sitio);

    Response::sendResponse(true, "Update sitio success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
