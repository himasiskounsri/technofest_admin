<?php

namespace App\Http\Middleware;

use App\Models\Festival;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // dd($request->session()->get('current_festival_id'));
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() !== null ? $request->user()->load(['avatar']) : null
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'constants' => config('constants'),
            'festivals' => Festival::all(['id', 'period', 'name', 'is_active']),
            'flash' => [
                'current_festival' => fn () => Festival::where('id', $request->session()->get('current_festival_id'))->first()
            ]
        ]);
    }
}
