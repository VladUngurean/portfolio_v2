<?php
header('Content-Type: application/json');
$url = 'https://api.ipify.org?format=json';
$response = file_get_contents($url);
$data = json_decode($response, true);
$user_ip = strval($data['ip']);
$accessKey = 'dfe9f601-bfdd-4913-845e-e73d6e644148';
$ip_info_url = 'https://apiip.net/api/check?ip=' . $user_ip . '&accessKey=' . $accessKey;
$ip_info_response = file_get_contents($ip_info_url);
$ip_info_data = json_decode($ip_info_response, true);
echo json_encode($ip_info_data);
?>