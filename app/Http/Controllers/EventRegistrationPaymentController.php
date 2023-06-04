<?php

namespace App\Http\Controllers;

use App\Models\EventRegistrationPayment;
use App\Http\Requests\StoreEventRegistrationPaymentRequest;
use App\Http\Requests\UpdateEventRegistrationPaymentRequest;
use Inertia\Inertia;

class EventRegistrationPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payments = EventRegistrationPayment::all();

        return Inertia::render('Payment/Index', [
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
