<?php

require_once "connection.php";

$json = json_decode(file_get_contents('php://input'));

$username = filter_var($json->user->username, FILTER_SANITIZE_STRING);
$firstName = filter_var($json->user->firstName, FILTER_SANITIZE_STRING);
$lastName = filter_var($json->user->lastName, FILTER_SANITIZE_STRING);
$password = $json->user->password;
$birthdate = date("Y-m-d", strtotime(filter_var($json->user->birthdate, FILTER_SANITIZE_STRING)));

try {
    $result = $mysql->query("INSERT INTO user (Username, Nome, Cognome, dataNascita, Password) VALUES ('" . $username . "', '" . $firstName . "', '" . $lastName . "', '" . $birthdate . "', '" . $password . "')");
    if ($result->rowCount() > 0) {
        echo json_encode(array(
            "error" => false,
            "message" => "Registrato con successo"
        ));
    } else {
        echo json_encode(array(
            "error" => false,
            "message" => "Impossibile registrarsi"
        ));
    }
} catch (PDOException $exception) {
    echo json_encode(array(
        "error" => true,
        "message" => $exception->getMessage()
    ));
} finally {
    $mysql = null;
}