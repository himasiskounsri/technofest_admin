<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Faq extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'question',
        'answer',
        'is_highlighted',
        'created_by'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id', 'created_by');
    }
}
