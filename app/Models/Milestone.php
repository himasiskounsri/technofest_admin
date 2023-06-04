<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Milestone extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'name',
        'date',
        'description',
        'is_global',
        'event_id',
        'festival_id'
    ];

    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    public function festival(): BelongsTo
    {
        return $this->belongsTo(Festival::class);
    }
}
