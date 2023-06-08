<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParticipantController extends Controller
{
    public function index()
    {
        $participants = User::with(['avatar:id,image'])
            ->where('role', config('constants.user_role.participant'))
            ->where('festival_id', session('current_festival_id'))
            ->withCount('eventRegistrations')
            ->get();

        return Inertia::render('Festival/Participant/Index', ['participants' => $participants]);
    }

    public function destroy($id)
    {
        $participant = User::find($id);
        $participant->delete();

        return redirect()
            ->route('participants.index')
            ->with('message', "Partisipan <b>{$participant->name}</b> berhasil dihapus");
    }
}
