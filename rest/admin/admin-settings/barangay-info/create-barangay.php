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

    $barangay->barangay_name  = filter_var($data["barangay_name"], FILTER_SANITIZE_STRING);
    $barangay->barangay_municipality  = filter_var($data["barangay_municipality"], FILTER_SANITIZE_STRING);
    $barangay->barangay_province  = filter_var($data["barangay_province"], FILTER_SANITIZE_STRING);
    $barangay->barangay_contact_person_primary  = filter_var($data["barangay_contact_person_primary"], FILTER_SANITIZE_STRING);
    $barangay->barangay_contact_number_primary  = filter_var($data["barangay_contact_number_primary"], FILTER_SANITIZE_STRING);
    $barangay->barangay_contact_person_secondary  = filter_var($data["barangay_contact_person_secondary"], FILTER_SANITIZE_STRING);
    $barangay->barangay_contact_number_secondary  = filter_var($data["barangay_contact_number_secondary"], FILTER_SANITIZE_STRING);
    $barangay->barangay_photo  = filter_var($data["barangay_photo"], FILTER_SANITIZE_STRING);
    $barangay->barangay_created = date("Y-m-d");
    $barangay->barangay_datetime = date("Y-m-d H:i:s");

    $result = checkCreate($barangay);

    Response::sendResponse(true, "Create barangay success.",  $result);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
