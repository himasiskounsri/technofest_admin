<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRegistrationPaymentRequest;
use App\Http\Requests\UpdateEventRegistrationPaymentRequest;
use App\Models\EventRegistrationPayment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventRegistrationPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $payments = EventRegistrationPayment::with(['eventRegistration', 'eventRegistration.event:id,name,price'])
            ->whereRelation('eventRegistration.event', 'festival_id', $request->user()->selected_festival)
            ->get();

        return Inertia::render('Festival/Payment/Index', [
            'payments' => $payments,
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
    public function show(string $id): Response|RedirectResponse
    {
        $payment = EventRegistrationPayment::with(['eventRegistration', 'eventRegistration.event', 'eventRegistration.users'])
            ->find($id);

        if (! $payment) {
            return to_route('payments.index');
        }

        return Inertia::render('Festival/Payment/Show', [
            'payment' => $payment,
        ]);
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
