<?php

namespace App\Http\Controllers;

use App\Models\EventRegistration;
use App\Models\EventRegistrationPayment;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $participants_count = User::where('role', config('constants.user_role.participant'))
            ->whereHas('festivals', function (Builder $query) {
                $query->where('festival_id', session('current_festival_id'));
            })
            ->count();

        $registrations_count = EventRegistration::whereRelation('event', 'festival_id', session('current_festival_id'))
            ->count();

        $payments_count = EventRegistrationPayment::whereRelation('eventRegistration.event', 'festival_id', session('current_festival_id'))
            ->where('status', config('constants.payment_status.not_confirmed'))
            ->count();

        return Inertia::render('_Dashboard', [
            'participants_count' => $participants_count,
            'registrations_count' => $registrations_count,
            'payments_count' => $payments_count
        ]);
    }
}
