<?php
declare(strict_types=1);

function respond(int $status, string $eyebrow, string $headline, string $message, string $language = 'en'): never
{
    http_response_code($status);
    header('Content-Type: text/html; charset=UTF-8');
    $safeEyebrow = htmlspecialchars($eyebrow, ENT_QUOTES, 'UTF-8');
    $safeHeadline = htmlspecialchars($headline, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    $htmlLang = $language === 'zh-hk' ? 'zh-Hant' : ($language === 'zh-cn' ? 'zh-Hans' : 'en');
    $home = $language === 'en' ? '/' : '/' . $language . '/';
    $returnLabel = $language === 'zh-hk' ? '返回 Mantle Intelligence' : ($language === 'zh-cn' ? '返回 Mantle Intelligence' : 'Return to Mantle Intelligence');
    echo <<<HTML
<!doctype html>
<html lang="{$htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex">
  <title>{$safeHeadline} | Mantle Intelligence</title>
  <style>
    :root{color-scheme:light}*{box-sizing:border-box}body{margin:0;background:#f7f6f2;color:#111313;font-family:Arial,sans-serif}.wrap{display:grid;min-height:100vh;place-items:center;padding:28px}.card{width:min(720px,100%);padding:clamp(34px,7vw,72px);border:1px solid #aaa;background:#fffefa}.mark{width:34px;height:34px;margin-bottom:54px;border:8px solid #171919;border-radius:50%}.eyebrow{font:600 12px/1.2 monospace;letter-spacing:.14em;text-transform:uppercase;color:#666}h1{margin:18px 0 22px;font-size:clamp(42px,7vw,72px);font-weight:500;letter-spacing:-.055em;line-height:1}p{max-width:560px;color:#555;font-size:18px;line-height:1.6}a{display:inline-flex;margin-top:34px;padding:15px 20px;background:#111313;color:white;text-decoration:none;font-weight:700}
  </style>
</head>
<body><main class="wrap"><section class="card"><div class="mark" aria-hidden="true"></div><div class="eyebrow">{$safeEyebrow}</div><h1>{$safeHeadline}</h1><p>{$safeMessage}</p><a href="{$home}">{$returnLabel}&nbsp; →</a></section></main></body>
</html>
HTML;
    exit;
}

function copy_for(string $language, string $key): string
{
    $copy = [
        'en' => [
            'contact' => 'Contact', 'use_form' => 'Use the enquiry form.', 'use_form_body' => 'Please return to Mantle Intelligence and submit your pilot request through the contact page.',
            'received' => 'Request received', 'thanks' => 'Thank you.', 'received_body' => 'Your message has been received.',
            'check' => 'Check your details', 'attention' => 'One detail needs attention.', 'attention_body' => 'Please return to the form and provide your name, organisation, a valid work email and the workflow you want to explore.',
            'rejected' => 'The request could not be accepted.', 'rejected_body' => 'Please remove line breaks from the short fields and try again.',
            'delivery' => 'Delivery issue', 'not_sent' => 'Your message was not sent.', 'retry' => 'Please try the form again shortly.',
            'sent' => 'Pilot request sent', 'touch' => 'Thank you. We’ll be in touch.', 'sent_body' => 'Your note has been delivered directly to the Mantle founding team.',
        ],
        'zh-hk' => [
            'contact' => '聯絡我們', 'use_form' => '請使用查詢表格。', 'use_form_body' => '請返回 Mantle Intelligence，透過聯絡頁面提交試點申請。',
            'received' => '已收到申請', 'thanks' => '謝謝。', 'received_body' => '我們已收到您的訊息。',
            'check' => '請檢查資料', 'attention' => '有一項資料需要修正。', 'attention_body' => '請返回表格，填寫姓名、機構、有效工作電郵及希望探索的流程。',
            'rejected' => '未能接受申請。', 'rejected_body' => '請移除簡短欄位中的換行，然後再試一次。',
            'delivery' => '傳送出現問題', 'not_sent' => '您的訊息未能送出。', 'retry' => '請稍後再次提交表格。',
            'sent' => '試點申請已送出', 'touch' => '謝謝，我們會與您聯絡。', 'sent_body' => '您的訊息已直接送達 Mantle 創辦團隊。',
        ],
        'zh-cn' => [
            'contact' => '联系我们', 'use_form' => '请使用咨询表格。', 'use_form_body' => '请返回 Mantle Intelligence，通过联系页面提交试点申请。',
            'received' => '已收到申请', 'thanks' => '谢谢。', 'received_body' => '我们已收到您的信息。',
            'check' => '请检查资料', 'attention' => '有一项资料需要修改。', 'attention_body' => '请返回表格，填写姓名、机构、有效工作邮箱及希望探索的流程。',
            'rejected' => '未能接受申请。', 'rejected_body' => '请移除简短字段中的换行，然后再试一次。',
            'delivery' => '发送出现问题', 'not_sent' => '您的信息未能发送。', 'retry' => '请稍后再次提交表格。',
            'sent' => '试点申请已发送', 'touch' => '谢谢，我们会与您联系。', 'sent_body' => '您的信息已直接发送给 Mantle 创始团队。',
        ],
    ];
    return $copy[$language][$key] ?? $copy['en'][$key];
}

$language = (string)($_POST['language'] ?? 'en');
if (!in_array($language, ['en', 'zh-hk', 'zh-cn'], true)) {
    $language = 'en';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, copy_for($language, 'contact'), copy_for($language, 'use_form'), copy_for($language, 'use_form_body'), $language);
}

if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(200, copy_for($language, 'received'), copy_for($language, 'thanks'), copy_for($language, 'received_body'), $language);
}

$name = trim((string)($_POST['name'] ?? ''));
$organisation = trim((string)($_POST['organisation'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$role = trim((string)($_POST['role'] ?? ''));
$workflow = trim((string)($_POST['workflow'] ?? ''));

if ($name === '' || $organisation === '' || $workflow === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, copy_for($language, 'check'), copy_for($language, 'attention'), copy_for($language, 'attention_body'), $language);
}

foreach ([$name, $organisation, $email, $role] as $headerValue) {
    if (preg_match('/[\r\n]/', $headerValue)) {
        respond(422, copy_for($language, 'check'), copy_for($language, 'rejected'), copy_for($language, 'rejected_body'), $language);
    }
}

$recipients = 'contact@aqtif.com, alfredlee2015@gmail.com';
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
    respond(500, copy_for($language, 'delivery'), copy_for($language, 'not_sent'), copy_for($language, 'retry'), $language);
}

respond(200, copy_for($language, 'sent'), copy_for($language, 'touch'), copy_for($language, 'sent_body'), $language);
