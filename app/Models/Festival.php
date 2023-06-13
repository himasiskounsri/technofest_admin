<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Festival extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'name',
        'theme',
        'description',
        'start_date',
        'end_date',
    ];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }

    public function faqs(): HasMany
    {
        return $this->hasMany(Faq::class);
    }

    public function milestones(): HasMany
    {
        return $this->hasMany(Milestone::class);
    }

    public function contactPersons(): HasMany
    {
        return $this->hasMany(ContactPerson::class);
    }
}
