<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Avatar;
use App\Models\Competition;
use App\Models\Event;
use App\Models\EventRegistration;
use App\Models\Festival;
use App\Models\Seminar;
use App\Models\SeminarCast;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $festival_2023 = Festival::factory()->create([
            'period' => '2023',
            'name' => "Technology Festival #4",
            'theme' => "Green Technologies: Bla2",
            'description' => "Nothing",
            'start_date' => new Carbon('2023-08-02'),
            'end_date' => new Carbon('2023-08-24'),
            'is_active' => true
        ]);

        $festival_2024 = Festival::factory()->create([
            'period' => '2024',
            'name' => "Technology Festival #5",
            'theme' => "Black Technologies: Dark Web Access",
            'description' => "Nothing",
            'start_date' => new Carbon('2024-08-02'),
            'end_date' => new Carbon('2024-08-24'),
            'is_active' => false
        ]);

        Avatar::factory(10)->create();

        User::factory(100)->create();

        $avatar = Avatar::select('id')->inRandomOrder()->first();
        $festival = Festival::select('id')->orderByDesc('period')->first();


        User::factory()->create([
            'uid' => nanoUid(),
            'name' => 'Rahmat',
            'email' => 'slow9ie@gmail.com',
            'role' => config('constants.user_role.admin'),
            'password' => 'qwerty123',
            'avatar_id' => $avatar->id,
            'selected_festival' => $festival->id,
            'festival_id' => $festival_2023->id
        ]);

        $this->createEvents($festival_2023);

        EventRegistration::factory(20)->create();
    }

    public function createEvents($festival): void
    {
        $event_uiux = Event::factory()->create([
            'name' => 'UI/UX',
            'type' => config('constants.event_type.competition'),
            'is_opened' => false,
            'festival_id' => $festival->id
        ]);

        Competition::factory()->create([
            'max_participants' => 4,
            'event_id' => $event_uiux->id
        ]);

        $event_competitive_programming = Event::factory()->create([
            'name' => 'Competitive Programming',
            'type' => config('constants.event_type.competition'),
            'is_opened' => false,
            'festival_id' => $festival->id
        ]);

        Competition::factory()->create([
            'max_participants' => 4,
            'event_id' => $event_competitive_programming->id
        ]);

        $event_essay = Event::factory()->create([
            'name' => 'Essay',
            'type' => config('constants.event_type.competition'),
            'is_opened' => false,
            'festival_id' => $festival->id
        ]);

        Competition::factory()->create([
            'max_participants' => 1,
            'event_id' => $event_essay->id
        ]);

        $event_poster = Event::factory()->create([
            'name' => 'Poster',
            'type' => config('constants.event_type.competition'),
            'is_opened' => false,
            'festival_id' => $festival->id
        ]);

        Competition::factory()->create([
            'max_participants' => 1,
            'event_id' => $event_poster->id
        ]);

        $event_seminar = Event::factory()->create([
            'name' => 'Seminar',
            'type' => config('constants.event_type.seminar'),
            'is_opened' => false,
            'festival_id' => $festival->id
        ]);

        $seminar = Seminar::factory()->create([
            'event_id' => $event_seminar->id
        ]);

        SeminarCast::factory()->create([
            'name' => 'Gede Pradnyananda',
            'title' => 'IoT Engineer',
            'role' => config('constants.seminar_cast_role.speaker'),
            'seminar_id' => $seminar->id
        ]);

        SeminarCast::factory()->create([
            'name' => 'Edo Pratama',
            'title' => 'Network Engineer',
            'role' => config('constants.seminar_cast_role.speaker'),
            'seminar_id' => $seminar->id
        ]);

        SeminarCast::factory()->create([
            'name' => 'Toni',
            'title' => 'Anak Rumahan',
            'role' => config('constants.seminar_cast_role.moderator'),
            'seminar_id' => $seminar->id
        ]);
    }
}
