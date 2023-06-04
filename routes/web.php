<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventRegistrationPaymentController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\FestivalPeriodController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use App\Models\EventRegistrationPayment;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/', [DashboardController::class, 'index']);

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/events', EventController::class);

    Route::resource('/payments', EventRegistrationPaymentController::class);

    Route::resource('/users', UserController::class);

    Route::resource('/faqs', FaqController::class);

    Route::prefix('/settings')->group(function () {
        Route::get('/', [SettingController::class, 'index'])->name('settings.index');
        Route::get('/festival', [SettingController::class, 'festival'])->name('settings.festival');
        Route::get('/account', [SettingController::class, 'account'])->name('settings.account');
    });

    Route::patch('/festival-period', [FestivalPeriodController::class, 'update'])->name('festival_period.update');
});

require __DIR__ . '/auth.php';
