<?php
try {
    include_once("../common/package.php");

    if ($_FILES['photo']) {
        $photo = $_FILES["photo"]["name"];
        // if (move_uploaded_file($_FILES["photo"]["tmp_name"], "../../img/" . $photo)) {
        if (move_uploaded_file($_FILES["photo"]["tmp_name"], "../../public/img/" . $photo)) {
            Response::sendResponse(true, "Yes photo", $photo);
        } else {
            Response::sendResponse(false, "No photo", $photo);
        }
    } else {
        Response::sendResponse(false, "No photo", "finally");
    }
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted becuase of system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
