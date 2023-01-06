<?php
try {
    include_once("../../../common/package.php");
    include_once("BarangayInfo.php");
    include_once("functions-barangay.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $barangay = new BarangayInfo($connection);

    $result = checkReadAll($barangay);

    $data = getResultData($result);

    Response::sendResponse(true, "Barangay data found", $data);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
