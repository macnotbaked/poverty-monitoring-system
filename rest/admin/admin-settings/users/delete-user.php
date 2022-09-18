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

    $role->roles_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);

    $result = checkDelete($role);

    Response::sendResponse(true, "Role successfuly deleted.", []);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
