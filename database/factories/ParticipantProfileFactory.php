<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ParticipantProfile>
 */
class ParticipantProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'whatsapp' => fake('id_ID')->e164PhoneNumber(),
            'institution' => fake()->word(),
            'gender' => fake()->numberBetween(1, 2),
            'student_id_number' => fake()->regexify('[0-9]{9}'),
        ];
    }
}
