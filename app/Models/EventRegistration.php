<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class EventRegistration extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'uid',
        'event_id',
    ];

    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(Participant::class)->withPivot('role')->withTimestamps()->as('event_registrant');
    }

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    public function eventRegistrationPayment(): HasOne
    {
        return $this->hasOne(EventRegistrationPayment::class);

    }
}
