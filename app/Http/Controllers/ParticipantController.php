<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParticipantController extends Controller
{
    public function index()
    {
        $participants = User::where('role', config('constants.user_role.participant'))
            ->where('festival_id', session('current_festival_id'))
            ->get();

        return Inertia::render('Festival/Participant/Index', ['participants' => $participants]);
    }
}
