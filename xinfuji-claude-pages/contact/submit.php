<?php
require_once dirname(dirname(__FILE__)) . '/wp-load.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://xinfuji.com');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo wp_json_encode(['success' => false, 'error' => 'invalid_method']);
    exit;
}

$name    = sanitize_text_field($_POST['name'] ?? '');
$country = sanitize_text_field($_POST['country'] ?? '');
$email   = sanitize_email($_POST['email'] ?? '');
$wa      = sanitize_text_field($_POST['wa'] ?? '');
$type    = sanitize_text_field($_POST['type'] ?? '');
$message = sanitize_textarea_field($_POST['message'] ?? '');

if (!$name || !$country || !$wa) {
    echo wp_json_encode(['success' => false, 'error' => 'required_fields']);
    exit;
}

$form_id = 1055;
$post_id = 532;

if (!function_exists('wpforms') || !wpforms()->process) {
    echo wp_json_encode(['success' => false, 'error' => 'wpforms_unavailable']);
    exit;
}

// Feed the custom-designed form into WPForms' native processing pipeline.
$entry = [
    'id'      => $form_id,
    'post_id' => $post_id,
    'nonce'   => wp_create_nonce("wpforms::form_{$form_id}"),
    'fields'  => [
        '1' => $name,
        '5' => $country,
        '2' => $email,
        '4' => $wa,
        '6' => $type,
        '3' => $message,
    ],
];

function xf_contact_translate_to_chinese($text) {
    $text = trim((string) $text);

    if ($text === '') {
        return '';
    }

    $response = wp_remote_get(
        add_query_arg(
            [
                'client' => 'gtx',
                'sl'     => 'auto',
                'tl'     => 'zh-CN',
                'dt'     => 't',
                'q'      => $text,
            ],
            'https://translate.googleapis.com/translate_a/single'
        ),
        ['timeout' => 2]
    );

    if (is_wp_error($response)) {
        return '';
    }

    $body = wp_remote_retrieve_body($response);
    $json = json_decode($body, true);

    if (!is_array($json) || empty($json[0]) || !is_array($json[0])) {
        return '';
    }

    $translated = '';

    foreach ($json[0] as $segment) {
        if (!empty($segment[0])) {
            $translated .= $segment[0];
        }
    }

    return trim($translated);
}

// WPForms checks these globals for AJAX/direct-post validation and smart tags.
$_POST['action']  = 'wpforms_submit';
$_POST['wpforms'] = $entry;

// This endpoint is server-side and same-origin; bypass browser-only anti-spam checks
// that expect WPForms' generated frontend markup and tokens.
$bypass_for_this_form = static function ($bypass, $form_data) use ($form_id) {
    return absint($form_data['id'] ?? 0) === $form_id ? true : $bypass;
};

add_filter('wpforms_process_anti_spam_honeypot_bypass', $bypass_for_this_form, 10, 2);
add_filter('wpforms_process_anti_spam_direct_post_bypass', $bypass_for_this_form, 10, 2);

$translation_for_email = static function ($fields, $entry_data, $form_data) use ($form_id, $name, $country, $type, $message) {
    if (absint($form_data['id'] ?? 0) !== $form_id) {
        return $fields;
    }

    $translated_message = xf_contact_translate_to_chinese($message);

    if ($translated_message === '') {
        return $fields;
    }

    $translation_block = "\n\n------------------------------\n中文翻译 / Chinese Translation\n------------------------------\n留言：\n" . $translated_message;

    if (isset($fields[3])) {
        $fields[3]['value'] = trim((string) ($fields[3]['value'] ?? '')) . $translation_block;

        if (isset($fields[3]['value_raw'])) {
            $fields[3]['value_raw'] = trim((string) $fields[3]['value_raw']) . $translation_block;
        }
    }

    return $fields;
};

add_filter('wpforms_entry_email_data', $translation_for_email, 20, 3);

wpforms()->process->process($entry);

remove_filter('wpforms_process_anti_spam_honeypot_bypass', $bypass_for_this_form, 10);
remove_filter('wpforms_process_anti_spam_direct_post_bypass', $bypass_for_this_form, 10);
remove_filter('wpforms_entry_email_data', $translation_for_email, 20);

$errors      = wpforms()->process->errors[$form_id] ?? [];
$spam_errors = wpforms()->process->spam_errors[$form_id] ?? [];
$entry_id    = absint(wpforms()->process->entry_id ?? 0);

if (!empty($errors) || !empty($spam_errors)) {
    echo wp_json_encode([
        'success' => false,
        'error'   => 'wpforms_processing_failed',
        'details' => array_merge($errors, $spam_errors),
    ]);
    exit;
}

echo wp_json_encode([
    'success'  => true,
    'entry_id' => $entry_id,
]);
