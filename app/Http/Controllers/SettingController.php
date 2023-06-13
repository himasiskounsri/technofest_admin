<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        return redirect()->route('settings.account');
    }

    public function account()
    {
        return Inertia::render('Setting/Account/Index');
    }
}
