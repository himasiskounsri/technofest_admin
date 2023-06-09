<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserProfile>
 */
class UserProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'whatsapp' => fake("id_ID")->e164PhoneNumber(),
            'institution' => fake()->word(),
            'gender' => fake()->numberBetween(1, 2),
            'student_id_number' => fake()->regexify('[0-9]{9}')
        ];
    }
}
