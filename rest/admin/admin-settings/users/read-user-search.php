<?php
try {
    require '../../../jwt/vendor/autoload.php';
    include_once("../../../common/package.php");
    include_once("User.php");
    include_once("functions-user.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $user = new Users($connection);

    $search = trim(filter_var($data["search"], FILTER_SANITIZE_STRING));

    $result = checkReadSearchActive($user, trim($search));

    $data = getResultData($result);

    Response::sendResponse(true, "Search user data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
