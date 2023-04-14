<?php

$cipher = 'rijndael-128';
$mode = 'cbc';
$miui_key = 'miuiotavalided11';
$miui_iv = '0102030405060708';

function miui_decrypt($s)
{
    global $cipher, $mode, $miui_key, $miui_iv;

    $td = mcrypt_module_open($cipher, '', $mode, '');
    mcrypt_generic_init($td, $miui_key, $miui_iv);
    $decrypted = mdecrypt_generic($td, base64_decode($s));
    mcrypt_generic_deinit($td);
    mcrypt_module_close($td);
    $pos = strrpos($decrypted, '}');
    if ($pos !== false)
        return substr($decrypted, 0, $pos + 1);
    return $decrypted;
}

function miui_encrypt($s)
{
    global $cipher, $mode, $miui_key, $miui_iv;

    $td = mcrypt_module_open($cipher, '', $mode, '');
    mcrypt_generic_init($td, $miui_key, $miui_iv);
    $bs = mcrypt_get_block_size($cipher, $mode);
    $n = $bs - (strlen($s) % $bs);
    while ($bs - (strlen($s) % $bs) != $bs)
        $s .= chr($n);
    $encrypted = base64_encode(mcrypt_generic($td, $s));
    mcrypt_generic_deinit($td);
    mcrypt_module_close($td);
    return $encrypted;
}

$checkurl = 'http://update.miui.com/updates/miotaV3.php';

$device_data = array(
    "a" => "0", # Don't know what this is.
    "c" => "7.0", # Same as 'c' above, it's the Android version.
    "b" => "F", # Same as above, 'X' for weekly build.
    "d" => "mido_global", # The device name, same as above, chiron for Chinese, chiron_global for global.
    "g" => "00000000000000000000000000000000", # This seems to be the android_id of the device. Maybe encoded somehow.
    "cts" => "0", # I don't know what this is.
    "i" => "0000000000000000000000000000000000000000000000000000000000000000", # This seems to be the imei of the device, obviously encoded somehow.
    "isR" => "0", # I don't know what this is.
    "f" => "1", # I don't know what this is.
    "l" => "en_US", # The locale.
    "n" => "",  # I don't know what this parameter is
    "sys" => "0", # I don't know what this is.
    "p" => "msm8953", # The chipset
    "unlock" => "1",  # 1 means bootloader is unlocked. 0 means locked.
    "r" => "CN", # I don't know what this is, maybe region of device?
    "sn" => "0x00000000", # Probably the serial number of the device, maybe encoded somehow.
    "v" => "MIUI-V9.0.5.0.NCFMIEI", # The version of MIUI installed.
    "bv" => "9", # I don't know what this is.
    "id" => "", # I don't' know what this is.
);

$js = json_encode($device_data);

$postdata = "q=".urlencode(miui_encrypt($js))."&t=&s=1";

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $checkurl);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);
$data = curl_exec($curl);
if ($data === false) {
    echo "*** curl_exec() failed: ".curl_errno($curl)." => ".curl_error($curl)."\n";
    curl_close($curl);
    exit;
}

$r = miui_decrypt($data);
$result = json_decode($r);
print_r($result);

exit;