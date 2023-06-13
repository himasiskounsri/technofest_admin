<?php

use Hidehalo\Nanoid\Client;

function nanoUid()
{
    $client = new Client();

    return $client->formattedId('0123456789ABCDEF', 7);
}
