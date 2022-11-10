<?php
try {
    include_once("../../../common/package.php");
    include_once("User.php");
    include_once("functions-user.php");
    include_once("../../../notification/new-account.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $user = new Users($connection);
    $encrypt = new Encryption();

    $user->users_is_active = 1;
    $user->users_key = $encrypt->doHash(rand());
    $user->users_fname = filter_var($data["users_fname"], FILTER_SANITIZE_STRING);
    $user->users_mname = filter_var($data["users_mname"], FILTER_SANITIZE_STRING);
    $user->users_lname = filter_var($data["users_lname"], FILTER_SANITIZE_STRING);
    $user->users_email = filter_var($data["users_email"], FILTER_SANITIZE_STRING);
    $user->users_phone = filter_var($data["users_phone"], FILTER_SANITIZE_STRING);
    $user->users_gender = filter_var($data["users_gender"], FILTER_SANITIZE_STRING);
    $user->users_role_id = filter_var($data["users_role_id"], FILTER_SANITIZE_STRING);
    $user->users_created = date("Y-m-d");
    $user->users_datetime = date("Y-m-d H:i:s");

    $result = checkCreate($user);

    $mail = sendEmail($user->users_email, $user->users_key, $user->users_fname,);

    Response::sendResponse(true, "Create user success.",  $result, $mail);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
