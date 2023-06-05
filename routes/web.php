<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\EventRegistrationPaymentController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\FestivalController;
use App\Http\Controllers\FestivalPeriodController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\RegistrationManagerTokenController;
use Illuminate\Support\Facades\Route;

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
    Route::prefix('/festival')->group(function () {
        Route::resource('/festivals', FestivalController::class);
        Route::resource('/events', EventController::class);
        Route::resource('/registrations', EventRegistrationController::class);
        Route::resource('/participants', ParticipantController::class);
        Route::resource('/payments', EventRegistrationPaymentController::class);
        Route::resource('/faqs', FaqController::class);
    });

    Route::prefix('/user')->group(function () {
        Route::resource('/managers', ManagerController::class);
        Route::resource('/token', RegistrationManagerTokenController::class)->only(['index', 'store']);
    });

    Route::prefix('/setting')->group(function () {
        Route::resource('/account', AccountController::class);
    });

    Route::patch('/festival-period', [FestivalPeriodController::class, 'update'])->name('festival_period.update');
});

require __DIR__ . '/auth.php';
