<?php

namespace App\Http\Controllers;

use App\Models\EventRegistrationPayment;
use App\Http\Requests\StoreEventRegistrationPaymentRequest;
use App\Http\Requests\UpdateEventRegistrationPaymentRequest;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EventRegistrationPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payments = DB::table('event_registration_payments')
            ->join('event_registrations', 'event_registration_id', '=', 'event_registrations.id')
            ->join('events', 'event_registrations.event_id', '=', 'events.id')
            ->join('festivals', 'events.festival_id', '=', 'festivals.id')
            ->where('festivals.id', '=', session('current_festival_id'))
            ->select('event_registration_payments.*', 'event_registrations.*')
            ->get();

        return Inertia::render('Festival/Payment/Index', [
            'payments' => $payments
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
    public function store(StoreEventRegistrationPaymentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(EventRegistrationPayment $eventRegistrationPayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EventRegistrationPayment $eventRegistrationPayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRegistrationPaymentRequest $request, EventRegistrationPayment $eventRegistrationPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EventRegistrationPayment $eventRegistrationPayment)
    {
        //
    }
}
