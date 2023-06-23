<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Competition extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'max_participants',
    ];

    public function event(): MorphOne
    {
        return $this->morphOne(Event::class, 'eventable');
    }
}
