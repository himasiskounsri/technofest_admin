<?php

namespace App\Http\Controllers;

use App\Models\EventRegistrationPayment;
use App\Http\Requests\StoreEventRegistrationPaymentRequest;
use App\Http\Requests\UpdateEventRegistrationPaymentRequest;
use App\Models\Event;
use App\Models\EventRegistration;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EventRegistrationPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payments = EventRegistrationPayment::with(['eventRegistration', 'eventRegistration.event:id,name,price'])
            ->whereRelation('eventRegistration.event', 'festival_id', session('current_festival_id'))
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
