<?php
// protocol
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";

// get domain + port
$domainName = $_SERVER['HTTP_HOST'];

// path
$scriptPath = str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME']));
$rootPath = ($scriptPath === '/' || $scriptPath === '\\') ? '/' : rtrim($scriptPath, '/') . '/';

$base_url = $protocol . $domainName . $rootPath;

// Define constant
if (!defined('BASE_URL')) {
    define('BASE_URL', $base_url);
}

function get_layout($name)
{

    $path = __DIR__ . '/layout/' . $name . '.php';

    if (file_exists($path)) {
        include_once $path;
    } else {
        echo "<script>console.error('Not exist: $path');</script>";
    }
}

function get_modal($name)
{

    $path = __DIR__ . '/layout/modal/' . $name . '.php';

    if (file_exists($path)) {
        include_once $path;
    } else {
        echo "<script>console.error('Not exist: $path');</script>";
    }
}

?>