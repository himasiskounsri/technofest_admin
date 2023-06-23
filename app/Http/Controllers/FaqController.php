<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFaqRequest;
use App\Http\Requests\UpdateFaqRequest;
use App\Models\Faq;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $faqs = Faq::with(['user:id,name'])
            ->orderBy('is_highlighted', 'desc')
            ->where('festival_id', $request->user()->selected_festival)
            ->get();

        return Inertia::render('Festival/Faq/Index', [
            'faqs' => $faqs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFaqRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Faq $faq): Response|RedirectResponse
    {
        if (! $faq) {
            return to_route('faqs.index');
        }

        return Inertia::render('Festival/Faq/Show', [
            'faq' => $faq->load(['user:id,name']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faq $faq)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFaqRequest $request, Faq $faq)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): RedirectResponse
    {
        $faq = Faq::find($id);
        $faq->delete();

        return redirect()
            ->route('faqs.index')
            ->with('message', 'Faq <b>'.Str::limit($faq->question, 20).'</b> berhasil dihapus');
    }
}
