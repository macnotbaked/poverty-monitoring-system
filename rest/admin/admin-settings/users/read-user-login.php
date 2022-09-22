<?php
// Using try catch block there is an error using the "use" keyword for JWT namespace
// use JWT
use \Firebase\JWT\JWT;

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

    $user->users_email = trim(filter_var($data["users_email"], FILTER_SANITIZE_STRING));
    $password = trim(filter_var($data["users_password"], FILTER_SANITIZE_STRING));

    $key = "jwt_admin_ko_ito";

    $result = $user->readLogin();
    $data = getResultData($result);

    if ($data[0]["roles_aid"] == "3") {
        $result = $user->readCitizenLogin();
    } else {
        $result = $user->readLogin();
    }

    if ($result->num_rows == 0) {
        Response::sendResponse(false, "Invalid email. Please use a registered one.", $result->fetch_assoc());
        exit();
    }

    $row = $result->fetch_assoc();
    extract($row);
    if (password_verify($password, $users_password)) {
        $payload = array(
            "iss" => "localhost", // A string containing the name or identifier of the issuer application.
            "aud" => "pms",
            "iat" => time(),  // timestamp of token issuing.
            "data" => array("email" => $users_email, "data" => $row), // App payload
        );
        $jwt = JWT::encode($payload, $key, 'HS256');


        Response::sendResponse(true, "Access granted.", $jwt, $row);
    } else {
        Response::sendResponse(false, "Access denied.", null);
    }
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
