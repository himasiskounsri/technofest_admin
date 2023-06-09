<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Competition;
use App\Models\Seminar;
use Inertia\Inertia;
use Symfony\Component\Uid\Ulid;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with(['competition', 'seminar', 'seminar.seminarCasts'])
            ->where('festival_id', session('current_festival_id'))
            ->get();

        return Inertia::render('Festival/Event/Index', [
            'events' => $events,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $event = Event::with(['competition', 'seminar', 'seminar.seminarCasts'])
            ->withCount('eventRegistrations')
            ->find($id);

        if (!$event) {
            return to_route('events.index');
        }

        return Inertia::render('Festival/Event/Show', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    public function destroy($id)
    {
        $event = Event::find($id);
        $event->delete();

        return redirect()
            ->route('events.index')
            ->with('message', "Event <b>{$event->name}</b> berhasil dihapus");
    }
}
