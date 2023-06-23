<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;


class Participant extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'provider',
        'user_id',
    ];

    public function participantProfile(): HasOne
    {
        return $this->hasOne(ParticipantProfile::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function eventRegistrations(): BelongsToMany
    {
        return $this->belongsToMany(EventRegistration::class)->withPivot('role')->withTimestamps()->as('event_registrant');
    }
}
