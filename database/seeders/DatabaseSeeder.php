<?php

namespace Database\Seeders;

use App\Models\Avatar;
use App\Models\Competition;
use App\Models\Event;
use App\Models\EventRegistration;
use App\Models\EventRegistrationPayment;
use App\Models\Faq;
use App\Models\Festival;
use App\Models\Seminar;
use App\Models\SeminarCast;
use App\Models\User;
use App\Models\UserProfile;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $festival_2023 = $this->createFestivals();
        $avatars = $this->createAvatars();
        $participants = $this->createParticipants($festival_2023);
        $managers = $this->createManagers($festival_2023);
        $admin = $this->createAdmin($festival_2023, $avatars[0]);
        $events = $this->createEvents($festival_2023, $participants);
        $faqs = $this->createFaqs($festival_2023, $managers);
    }

    public function createFestivals()
    {
        $festival_2023 = Festival::factory()
            ->hasContactPersons(4, [
                'is_global' => true
            ])
            ->hasMilestones(4, [
                'is_global' => true
            ])
            ->create([
                'period' => '2023',
                'name' => "Technology Festival #4",
                'theme' => "Green Technologies: Bla2",
                'description' => fake()->paragraph(),
                'start_date' => new Carbon('2023-08-02'),
                'end_date' => new Carbon('2023-08-24'),
                'is_active' => true
            ]);

        $festival_2024 = Festival::factory()
            ->hasContactPersons(4, [
                'is_global' => true
            ])
            ->hasMilestones(4, [
                'is_global' => true
            ])
            ->create([
                'period' => '2024',
                'name' => "Technology Festival #5",
                'theme' => "Black Technologies: Dark Web Access",
                'description' => fake()->paragraph(),
                'start_date' => new Carbon('2024-08-02'),
                'end_date' => new Carbon('2024-08-24'),
                'is_active' => false
            ]);

        return $festival_2023;
    }

    public function createAvatars()
    {
        return Avatar::factory(10)->create();
    }

    public function createParticipants($festival)
    {
        return User::factory(50)
            ->hasAttached($festival)
            ->hasUserProfile()
            ->create([
                'role' => config('constants.user_role.participant')
            ]);
    }

    public function createManagers($festival)
    {
        return User::factory(10)
            ->hasAttached($festival)
            ->create([
                'role' => config('constants.user_role.manager')
            ]);
    }

    public function createAdmin($festival, $avatar)
    {
        return User::factory()
            ->for($avatar)
            ->create([
                'uid' => nanoUid(),
                'name' => 'Rahmat',
                'email' => 'slow9ie@gmail.com',
                'role' => config('constants.user_role.admin'),
                'password' => 'qwerty',
                'selected_festival' => $festival->id,
            ]);
    }

    public function createEvents($festival, $participants)
    {
        $event_uiux = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                // ->hasAttached(
                //     $participants->random(3),
                //     ["role" => 2]
                // )
                // ->hasAttached(
                //     $participants->random(1),
                //     ["role" => 1]
                // )
            )
            ->hasCompetition(1, [
                'max_participants' => 4
            ])
            ->for($festival)
            ->create([
                'name' => 'UI/UX',
                'type' => config('constants.event_type.competition'),
                'is_opened' => false,
                'price' => 40000
            ]);

        $event_competitive_programming = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                // ->hasAttached(
                //     $participants->random(3),
                //     ["role" => 2]
                // )
                // ->hasAttached(
                //     $participants->random(1),
                //     ["role" => 1]
                // )
            )
            ->hasCompetition(1, [
                'max_participants' => 4
            ])
            ->for($festival)
            ->create([
                'name' => 'Competitive Programming',
                'type' => config('constants.event_type.competition'),
                'is_opened' => false,
                'price' => 40000
            ]);

        $event_essay = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                // ->hasAttached(
                //     $participants->random(1),
                //     ["role" => 0]
                // )
            )
            ->hasCompetition(1, [
                'max_participants' => 1
            ])
            ->for($festival)
            ->create([
                'name' => 'Essay',
                'type' => config('constants.event_type.competition'),
                'is_opened' => false,
                'price' => 1000000
            ]);

        $event_poster = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                // ->hasAttached(
                //     $participants->random(1),
                //     ["role" => 0]
                // )
            )
            ->hasCompetition(1, [
                'max_participants' => 1
            ])
            ->for($festival)
            ->create([
                'name' => 'Poster',
                'type' => config('constants.event_type.competition'),
                'is_opened' => false,
                'price' => 20000
            ]);

        $event_seminar = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                    ->hasAttached(
                        $participants[0],
                        ["role" => 0]
                    )
            )
            ->hasCompetition(1, [
                'max_participants' => 1
            ])
            ->for($festival)
            ->create([
                'name' => 'Seminar',
                'type' => config('constants.event_type.seminar'),
                'is_opened' => false,
                'price' => 90000
            ]);

        $seminar = Seminar::factory()
            ->for($event_seminar)
            ->create();

        SeminarCast::factory()
            ->for($seminar)
            ->create([
                'name' => 'Gede Pradnyananda',
                'title' => 'IoT Engineer',
                'role' => config('constants.seminar_cast_role.speaker'),
            ]);

        SeminarCast::factory()
            ->for($seminar)
            ->create([
                'name' => 'Edo Pratama',
                'title' => 'Network Engineer',
                'role' => config('constants.seminar_cast_role.speaker'),
            ]);

        SeminarCast::factory()
            ->for($seminar)
            ->create([
                'name' => 'Toni',
                'title' => 'Anak Rumahan',
                'role' => config('constants.seminar_cast_role.moderator'),
            ]);
    }

    public function createFaqs($festival, $managers)
    {
        Faq::factory(20)
            ->for($managers->random())
            ->for($festival)
            ->create();
    }
}
