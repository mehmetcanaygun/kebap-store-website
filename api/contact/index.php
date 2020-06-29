<?php

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(empty($_POST['name']) && empty($_POST['email'])) die();

if($_POST) {
	// Set response code - 200 OK
	http_response_code(200);
	$subject = $_POST['name'] . " " . $_POST['surname'];
	$to = "mca199667@gmail.com";
	$from = $_POST['email'];

	// Data
	// $msg = $_POST['message'] . "\n\n" . "Gönderen: " . $_POST['name'] . " " . $_POST['surname'] . "\n" . "E-mail: " . $_POST['email'] . "\n" . "Telefon: " . $_POST["phone"];

	$msg = "<strong>Gönderen</strong>: " . $_POST["name"] . " " . $_POST["surname"] . "<br/>"; 
	$msg .= "<strong>Email</strong>: " . $_POST["email"] . "<br/>"; 
	$msg .= "<strong>Telefon</strong>: " . $_POST["phone"] . "<br/><br/>";
	$msg .=  $_POST["message"];

	// Headers
	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ", web sayfanız üzerinden iletişime geçti." . ">";

	mail($to, $subject, $msg, $headers);

	// Echo json_encode( $_POST );
	echojson_encode(array(
		"sent" => true
	));
} else {
	// Tell the user about error
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>