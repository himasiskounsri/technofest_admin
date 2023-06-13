<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Avatar extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'image',
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
