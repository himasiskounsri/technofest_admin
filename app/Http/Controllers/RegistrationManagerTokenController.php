<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationManagerTokenRequest;
use App\Http\Requests\UpdateRegistrationManagerTokenRequest;
use App\Models\RegistrationManagerToken;
use Inertia\Inertia;

class RegistrationManagerTokenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('User/Token/Index');
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
    public function store(StoreRegistrationManagerTokenRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RegistrationManagerToken $registrationManagerToken)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RegistrationManagerToken $registrationManagerToken)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRegistrationManagerTokenRequest $request, RegistrationManagerToken $registrationManagerToken)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RegistrationManagerToken $registrationManagerToken)
    {
        //
    }
}
