<?php

return [
    // The four gender codes specified in ISO/IEC 5218: https://en.wikipedia.org/wiki/ISO/IEC_5218
    'gender' => [
        'not_known' => 0,
        'male' => 1,
        'famale' => 2,
        'not_applicable' => 9,
    ],

    'user_role' => [
        'admin' => 0,
        'manager' => 1,
        'participant' => 2,
    ],

    'event_registration_user_role' => [
        'individual' => 0,
        'leader' => 1,
        'member' => 2,
    ],

    'seminar_cast_role' => [
        'speaker' => 0,
        'moderator' => 1,
    ],

    'event_type' => [
        'seminar' => 0,
        'competition' => 1,
    ],

    'payment_status' => [
        'not_confirmed' => 0,
        'accepted' => 1,
        'rejected' => 2
    ],
];
