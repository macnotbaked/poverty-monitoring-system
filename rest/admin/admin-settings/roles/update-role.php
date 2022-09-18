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

    $role->roles_aid  = filter_var($data["roles_aid"], FILTER_SANITIZE_STRING);
    $role->roles_name  = filter_var($data["roles_name"], FILTER_SANITIZE_STRING);
    $role->roles_datetime = date("Y-m-d H:i:s");

    $result = checkUpdate($role);

    Response::sendResponse(true, "Update role success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
