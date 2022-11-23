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

    $sitio->sitio_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);

    $result = checkDelete($sitio);

    Response::sendResponse(true, "Sitio successfuly deleted.", []);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
