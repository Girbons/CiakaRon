<?php

if (isset($_SESSION["username"])) {
    echo json_encode(array(
        "error" => false,
        "user" => array(
            "username" => $_SESSION["username"],
            "firstName" => $_SESSION["firstName"],
            "lastName" => $_SESSION["lastName"],
            "birthdate" => $_SESSION["dataNascita"],
        )
    ));
} else {
    echo json_encode(array(
        "error" => true,
        "user" => null
    ));
}