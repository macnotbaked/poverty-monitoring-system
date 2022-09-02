<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

include_once("mail-config.php");
include_once("html/html-forgot-password.php");

function sendEmail($email, $key)
{
	$mail = new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host = 'mail.frontlinebusiness.com.ph'; // if siteground
	$mail->Port = 465;
	$mail->SMTPSecure = "ssl";
	$mail->SMTPAuth = true;
	$mail->Username =  USERNAME; // if gmail use your gmail email
	$mail->Password = PASSWORD; // if gmail use your email password
	$mail->Subject = SUBJECT_FORGOT_PASSWORD;
	$mail->setFrom(USERNAME, FROM);
	$mail->isHTML(true);
	$mail->Body = getHtmlForgotPassword($key, ROOT_DOMAIN, IMAGES_URL);
	$mail->addAddress($email);

	if ($mail->Send()) {
		return "Success sending email.";
	} else {
		return "Failed sending email.";
	}
}
