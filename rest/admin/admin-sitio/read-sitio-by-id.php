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

    $sitio->sitio_aid = filter_var($data["type"], FILTER_SANITIZE_STRING);

    $result = checkReadById($sitio);

    $data = getResultData($result);

    Response::sendResponse(true, "Purok by ID data found.", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
