<?php

namespace App\Http\Controllers;

use App\Models\EventRegistration;
use App\Models\EventRegistrationPayment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $users = User::with('eventRegistrations')->where('role', config('constants.user_role.participant'))->withCount('eventRegistrations')->get();
        // $registrations = EventRegistration::with(['event', 'eventRegistrationPayment'])->where('event.festival_id', session('current_festival_id'))->get();
        // $paymentsCount = EventRegistrationPayment::where('eventRegistration.event.festival_id', session('current_festival_id'))->count();

        $registrations = DB::table('event_registrations')
            ->join('events', 'events.id', '=', 'event_id')
            ->leftJoin('event_registration_payments', 'event_registrations.id', '=', 'event_registration_id')
            ->where('events.festival_id', '=', session('current_festival_id'))
            ->select('event_registrations.*', 'event_registration_payments.status')
            ->get();

        $paymentsCount = DB::table('event_registration_payments')
            ->join('event_registrations', 'event_registration_id', '=', 'event_registrations.id')
            ->join('events', 'event_registrations.event_id', '=', 'events.id')
            ->where('events.festival_id', '=', session('current_festival_id'))
            ->select("*")
            ->count();

        // dd($registrations);


        return Inertia::render('_Dashboard', [
            'users' => $users,
            'eventRegistrations' => $registrations,
            'paymentsCount' => $paymentsCount
        ]);
    }
}
