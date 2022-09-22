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

    $user->users_key = trim(filter_var($data["val1"], FILTER_SANITIZE_STRING));

    $result = checkReadKey($user);
    $data = getResultData($result);

    Response::sendResponse(true, "User key data found.", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
