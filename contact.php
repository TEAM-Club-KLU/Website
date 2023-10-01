<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Your GitHub repository details
$owner = 'subhangmokkarala';
$repo = 'contactus';
$joke = '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';

$data = [
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'message' => $message,
];

// Convert data to JSON
$json_data = json_encode($data);

// Create a new file in the repository with the form data
$url = "https://api.github.com/repos/$owner/$repo/contents/form-submissions/" . time() . ".json";
$headers = [
    "Authorization: token $joke",
    "Content-Type: application/json",
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    echo 'Form submission successful!';
} else {
    echo 'Error submitting the form.';
}
?>
