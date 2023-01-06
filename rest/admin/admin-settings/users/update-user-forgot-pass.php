<?php
try {
    include_once("../../../common/package.php");
    include_once("User.php");
    include_once("functions-user.php");
    include_once("../../../notification/reset-account.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $user = new Users($connection);
    $encrypt = new Encryption();

    $users_fname = trim(filter_var($data["users_fname"], FILTER_SANITIZE_STRING));
    $user->users_email = trim(filter_var($data["users_email"], FILTER_SANITIZE_STRING));
    $user->users_key = $encrypt->doHash(rand());
    $user->users_datetime = date("Y-m-d H:i:s");

    $email = $user->isEmailExist();

    if ($email->num_rows == 0) {
        Response::sendResponse(false, "Email not found.", $email);
        exit();
    }

    $userActive = $user->isUserActive();

    if ($userActive->num_rows > 0) {
        Response::sendResponse(false, "Email not found.", $userActive);
        exit();
    }

    $result = checkForgotPass($user);

    $mail = sendEmail($user->users_email, $user->users_key, $users_fname,);

    Response::sendResponse(true, "Link successfully sent to your email.", $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
