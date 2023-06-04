<?php

namespace App\Http\Controllers;

use App\Models\Festival;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        return redirect()->route('settings.festival');
    }

    public function festival()
    {
        return Inertia::render('Setting/Festival/Index');
    }

    public function account()
    {
        return Inertia::render('Setting/Account/Index');
    }
}
