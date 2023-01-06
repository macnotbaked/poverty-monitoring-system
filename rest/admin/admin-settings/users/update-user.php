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

    $user->users_aid  = filter_var($data["users_aid"], FILTER_SANITIZE_STRING);
    $user->users_fname = filter_var($data["users_fname"], FILTER_SANITIZE_STRING);
    $user->users_mname = filter_var($data["users_mname"], FILTER_SANITIZE_STRING);
    $user->users_lname = filter_var($data["users_lname"], FILTER_SANITIZE_STRING);
    $user->users_email = filter_var($data["users_email"], FILTER_SANITIZE_STRING);
    $user->users_phone = filter_var($data["users_phone"], FILTER_SANITIZE_STRING);
    $user->users_role = filter_var($data["users_role"], FILTER_SANITIZE_STRING);
    $user->users_datetime = filter_var($data["users_datetime"], FILTER_SANITIZE_STRING);

    $result = checkUpdate($user);

    Response::sendResponse(true, "Update user success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
