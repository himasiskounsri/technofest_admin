<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ParticipantProfile extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'student_id_number',
        'institution',
        'gender',
        'whatsapp',
        'instagram',
        'line',
        'participant_id',
    ];

    public function participant(): BelongsTo
    {
        return $this->belongsTo(Participant::class);
    }
}
