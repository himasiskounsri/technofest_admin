<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrationManagerToken extends Model
{
    use HasFactory;

    protected $fillable = [
        'token',
        'expired_at'
    ];
}
