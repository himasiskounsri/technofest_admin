<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use function App\Helpers\nanoUid;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $competitions = DB::table('competitions')
            ->join('events', 'event_id', '=', 'events.id')
            ->join('festivals', 'events.festival_id', '=', 'festivals.id')
            ->where('festivals.id', '=', session('current_festival_id'))
            ->select('events.*', 'competitions.*')
            ->get();

        $seminars = DB::table('seminars')
            ->join('events', 'event_id', '=', 'events.id')
            ->join('festivals', 'events.festival_id', '=', 'festivals.id')
            ->where('festivals.id', '=', session('current_festival_id'))
            ->select('events.*', 'seminars.*')
            ->get();

        return Inertia::render('Festival/Event/Index', [
            'competitions' => $competitions,
            'seminars' => $seminars
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
    public function show(Event $event)
    {
        //
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }
}
