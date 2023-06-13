<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EventRegistrationPayment extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'status',
        'payment_proof',
        'event_registration_id',
    ];

    public function eventRegistration(): BelongsTo
    {
        return $this->belongsTo(EventRegistration::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'confirmed_by');
    }
}
