<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FestivalPeriodController extends Controller
{
    public function update(Request $request)
    {
        // dd($request->input('festival_id'));
        $user = $request->user()->fill([
            'selected_festival' => $request->input('festival_id')
        ]);

        $user->save();

        $request->session()->put('current_festival_id', $request->input('festival_id'));

        return redirect()->back();
    }
}
