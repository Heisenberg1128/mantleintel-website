<?php
declare(strict_types=1);

function respond(int $status, string $eyebrow, string $headline, string $message): never
{
    http_response_code($status);
    header('Content-Type: text/html; charset=UTF-8');
    $safeEyebrow = htmlspecialchars($eyebrow, ENT_QUOTES, 'UTF-8');
    $safeHeadline = htmlspecialchars($headline, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    echo <<<HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex">
  <title>{$safeHeadline} | Mantle Intelligence</title>
  <style>
    :root{color-scheme:light}*{box-sizing:border-box}body{margin:0;background:#f7f6f2;color:#111313;font-family:Arial,sans-serif}.wrap{display:grid;min-height:100vh;place-items:center;padding:28px}.card{width:min(720px,100%);padding:clamp(34px,7vw,72px);border:1px solid #aaa;background:#fffefa}.mark{width:34px;height:34px;margin-bottom:54px;border:8px solid #171919;border-radius:50%}.eyebrow{font:600 12px/1.2 monospace;letter-spacing:.14em;text-transform:uppercase;color:#666}h1{margin:18px 0 22px;font-size:clamp(42px,7vw,72px);font-weight:500;letter-spacing:-.055em;line-height:1}p{max-width:560px;color:#555;font-size:18px;line-height:1.6}a{display:inline-flex;margin-top:34px;padding:15px 20px;background:#111313;color:white;text-decoration:none;font-weight:700}
  </style>
</head>
<body><main class="wrap"><section class="card"><div class="mark" aria-hidden="true"></div><div class="eyebrow">{$safeEyebrow}</div><h1>{$safeHeadline}</h1><p>{$safeMessage}</p><a href="/">Return to Mantle Intelligence&nbsp; →</a></section></main></body>
</html>
HTML;
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, 'Contact', 'Use the enquiry form.', 'Please return to Mantle Intelligence and submit your pilot request through the contact page.');
}

if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(200, 'Request received', 'Thank you.', 'Your message has been received.');
}

$name = trim((string)($_POST['name'] ?? ''));
$organisation = trim((string)($_POST['organisation'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$role = trim((string)($_POST['role'] ?? ''));
$workflow = trim((string)($_POST['workflow'] ?? ''));

if ($name === '' || $organisation === '' || $workflow === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, 'Check your details', 'One detail needs attention.', 'Please return to the form and provide your name, organisation, a valid work email and the workflow you want to explore.');
}

foreach ([$name, $organisation, $email, $role] as $headerValue) {
    if (preg_match('/[\r\n]/', $headerValue)) {
        respond(422, 'Check your details', 'The request could not be accepted.', 'Please remove line breaks from the short fields and try again.');
    }
}

$recipients = 'contact@aqtif.com, alfred@aqtif.com';
$subject = 'Mantle pilot enquiry — ' . substr($organisation, 0, 120);
$body = "A new Mantle pilot enquiry was submitted through mantleintel.com.\n\n"
    . "Name: {$name}\n"
    . "Organisation: {$organisation}\n"
    . "Work email: {$email}\n"
    . "Role: {$role}\n\n"
    . "Workflow:\n{$workflow}\n";
$headers = [
    'From: Mantle website <no-reply@mantleintel.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: Mantle Website',
];

if (!mail($recipients, $subject, $body, implode("\r\n", $headers))) {
    respond(500, 'Delivery issue', 'Your message was not sent.', 'Please try the form again shortly.');
}

respond(200, 'Pilot request sent', 'Thank you. We’ll be in touch.', 'Your note has been delivered directly to the Mantle founding team.');
