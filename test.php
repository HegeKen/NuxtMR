<?php
define('AES_128_CBC', 'aes-128-cbc');

$q = 'RMnOGd%2Be0NNG2DwH7PkO1Wsudgf7Ss0CgFCRv5iTrpWO46ODkEI%2FQ9%2B9udjXENxgdcpwRKYiiGJW6Ov39q2eOUZtP%2BhwvQ4daM2Jd0wxBkWSuNYVfRIsZZMJyaPAtxnWP6whLNUi1DE%2F3zm%2BNX947TAAwJ%2BwisR031Am8nJDsHNv%2F22dtzK3XRJNCF9j2zhdriYDs5lIfV2R1CLKN6mlBKZ8%2Br8nROK5oXd1ji%2FW%2BdsY%2BsxSoaMyR221oMQYwg%2Flxw8nUX1ZQqyBd1Qtipr7L9QKPJYnwEnyVZqw3qG6nVI%3D';
$q_urldecode = urldecode($q);
$miui_key = 'miuiotavalided11';
$miui_iv = '0102030405060708';

$device_data = openssl_decrypt(base64_decode($q_urldecode), AES_128_CBC, $miui_key, $options=OPENSSL_RAW_DATA, $miui_iv);

print_r ("device_data = $device_data\n\n");
?>