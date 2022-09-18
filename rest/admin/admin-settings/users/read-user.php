<?php
try {
    include_once("../../../common/package.php");
    include_once("Roles.php");
    include_once("functions-roles.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $role = new Roles($connection);

    $result = checkReadAll($role);

    $data = getResultData($result);

    Response::sendResponse(true, "Role data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
