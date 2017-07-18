<?php

foreach ($_FILES as $file) {
    list($name, $ext) = explode(".", $file['name']);
    
    if ($ext != 'jpg' || $file['size'] > 10485760) {
        header("HTTP/1.0 500 Internal Server Error");
    } else {
        copy($file['tmp_name'], 'loaded/' . $file['name']);
        unlink($file['tmp_name']);
    }
}