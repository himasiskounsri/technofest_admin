<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{
    public function index(): RedirectResponse
    {
        return redirect()->route('settings.account');
    }

    public function account(): Response
    {
        return Inertia::render('Setting/Account/Index');
    }
}
