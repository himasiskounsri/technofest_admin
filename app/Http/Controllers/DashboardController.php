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

        // TODO: Tolong direview lagi, ada kemungkinan keliru. Pangambilan users harus sesuai dengan periode festival saat ini
        $participants_count = User::where('role', config('constants.user_role.participant'))
            ->where('festival_id', session('current_festival_id'))
            ->count();

        $registrations_count = EventRegistration::whereRelation('event', 'festival_id', session('current_festival_id'))
            ->count();

        $payments_count = EventRegistrationPayment::whereRelation('eventRegistration.event', 'festival_id', session('current_festival_id'))
            ->where('status', config('constants.payment_status.not_confirmed'))
            ->count();

        // DB::table('event_registrations')
        //     ->join('events', 'events.id', '=', 'event_id')
        //     ->leftJoin('event_registration_payments', 'event_registrations.id', '=', 'event_registration_id')
        //     ->where('events.festival_id', '=', session('current_festival_id'))
        //     ->select('event_registrations.*', 'event_registration_payments.status')
        //     ->get();

        // $payments_count = DB::table('event_registration_payments')
        //     ->join('event_registrations', 'event_registration_id', '=', 'event_registrations.id')
        //     ->join('events', 'event_registrations.event_id', '=', 'events.id')
        //     ->where('events.festival_id', '=', session('current_festival_id'))
        //     ->select("*")
        //     ->count();

        // dd($registrations);


        return Inertia::render('_Dashboard', [
            'participants_count' => $participants_count,
            'registrations_count' => $registrations_count,
            'payments_count' => $payments_count
        ]);
    }
}
