<?php
try {
    include_once("../../../common/package.php");
    include_once("User.php");
    include_once("functions-user.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $user = new Users($connection);

    $user->users_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
    $user->users_datetime = date("Y-m-d H:i:s");

    $result = checkRestore($user);

    Response::sendResponse(true, "Restore user success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
