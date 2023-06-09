<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagerController extends Controller
{
    public function index()
    {

        $managers = User::with(['avatar:id,image'])
            ->where('role', config('constants.user_role.manager'))
            ->whereHas('festivals', function (Builder $query) {
                $query->where('festival_id', session('current_festival_id'));
            })
            ->get();

        return Inertia::render('User/Manager/Index', [
            'managers' => $managers
        ]);
    }
}
