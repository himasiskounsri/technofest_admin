<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;

class ParticipantController extends Controller
{
    public function index()
    {
        $participants = User::with(['avatar:id,image', 'userProfile'])
            ->where('role', config('constants.user_role.participant'))
            ->whereHas('festivals', function (Builder $query) {
                $query->where('festival_id', session('current_festival_id'));
            })
            ->withCount('eventRegistrations')
            ->get();

        return Inertia::render('Festival/Participant/Index', ['participants' => $participants]);
    }

    public function show(string $id)
    {
        $participant = User::with(['avatar:id,image', 'userProfile', 'eventRegistrations', 'eventRegistrations.event'])
            ->find($id);

        if (! $participant) {
            return to_route('participants.index');
        }

        return Inertia::render('Festival/Participant/Show', ['participant' => $participant]);
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
