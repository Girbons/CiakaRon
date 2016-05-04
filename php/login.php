<?php

require_once "connection.php";

$json = json_decode(file_get_contents('php://input'));

session_start();

$username = filter_var($json->user->username, FILTER_SANITIZE_STRING);
$password = $json->user->password;

try {
    $error = true;
    foreach ($mysql->query("SELECT * FROM user WHERE Username = '" . $username . "'") as $row) {
        if (!strcmp($row["password"], $password)) {

            $error = false;

            $_SESSION["username"] = $row["Username"];
            $_SESSION["firstName"] = $row["Nome"];
            $_SESSION["lastName"] = $row["Cognome"];
            $_SESSION["birthdate"] = $row["dataNascita"];
        }
    }
    if (!$error) {
        echo json_encode(array(
            "error" => false,
            "message" => "Autenticato con successo"
        ));
    } else {
        echo json_encode(array(
            "error" => true,
            "message" => "Impossibile autenticarsi"
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