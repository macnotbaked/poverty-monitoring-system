<?php
try {
    include_once("../../common/package.php");
    include_once("Representative.php");
    include_once("functions-representative.php");

    $body = file_get_contents("php://input");
    $data = json_decode($body, true);
    $connection = checkConnection();
    checkInputData($data);
    $representative = new Representative($connection);

    $representative->representative_eval_id = filter_var($data["representative_eval_id"], FILTER_SANITIZE_STRING);
    $representative->representative_purok_id = filter_var($data["representative_purok_id"], FILTER_SANITIZE_STRING);
    $representative->representative_is_active = 1;
    $representative->representative_name = filter_var($data["representative_name"], FILTER_SANITIZE_STRING);
    $representative->representative_contact = filter_var($data["representative_contact"], FILTER_SANITIZE_STRING);
    $representative->representative_house_number = filter_var($data["representative_house_number"], FILTER_SANITIZE_STRING);
    $representative->representative_total_people = filter_var($data["representative_total_people"], FILTER_SANITIZE_STRING);
    $representative->representative_total_underage = filter_var($data["representative_total_underage"], FILTER_SANITIZE_STRING);
    $representative->representative_total_midage = filter_var($data["representative_total_midage"], FILTER_SANITIZE_STRING);
    $representative->representative_total_adult = filter_var($data["representative_total_adult"], FILTER_SANITIZE_STRING);
    $representative->representative_total_seniors = filter_var($data["representative_total_seniors"], FILTER_SANITIZE_STRING);
    $representative->representative_total_pwd = filter_var($data["representative_total_pwd"], FILTER_SANITIZE_STRING);
    $representative->representative_total_elem = filter_var($data["representative_total_elem"], FILTER_SANITIZE_STRING);
    $representative->representative_total_highschool = filter_var($data["representative_total_highschool"], FILTER_SANITIZE_STRING);
    $representative->representative_total_college = filter_var($data["representative_total_college"], FILTER_SANITIZE_STRING);
    $representative->representative_household_living_id = filter_var($data["representative_household_living_id"], FILTER_SANITIZE_STRING);
    $representative->representative_is_in_danger_area = filter_var($data["representative_is_in_danger_area"], FILTER_SANITIZE_STRING);
    $representative->representative_monthly_income = filter_var($data["representative_monthly_income"], FILTER_SANITIZE_STRING);
    $representative->representative_total_able_work = filter_var($data["representative_total_able_work"], FILTER_SANITIZE_STRING);
    $representative->representative_total_employed = filter_var($data["representative_total_employed"], FILTER_SANITIZE_STRING);
    $representative->representative_created = date("Y-m-d");
    $representative->representative_datetime = date("Y-m-d H:i:s");

    checkReadAlreadyExist($representative, $representative->representative_name,  $representative->representative_house_number);

    $result = checkCreate($representative);

    Response::sendResponse(true, "Create representative success.",  $result, $mail);
} catch (Error $e) {
    Response::sendResponse(false, "Request interrupted because a system error occured, please contact merin.ryanmark@gmail.com", "finally");
}
