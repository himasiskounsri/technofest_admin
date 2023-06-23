<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ParticipantController extends Controller
{
    public function index(Request $request): Response
    {
        $participants = Participant::with(['user:id,name,email,avatar_id', 'user.avatar:id,image', 'participantProfile'])
            ->whereRelation('user.festivals', 'festival_id', $request->user()->selected_festival)
            ->withCount('eventRegistrations')
            ->get();

//        dd($participants);

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

    public function destroy($id): RedirectResponse
    {
        $participant = Participant::find($id);
        $participant->delete();

        return redirect()
            ->route('participants.index')
            ->with('message', "Partisipan <b>{$participant->user->name}</b> berhasil dihapus");
    }
}
