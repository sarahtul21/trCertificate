<?php

namespace App\Http\Controllers;

use App\Models\TrCer;
use App\Http\Requests\StoreTrCerRequest;
use App\Http\Requests\UpdateTrCerRequest;
use App\Http\Resources\TrCerResource;

class TrCerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TrCerResource::collection(
            TrCer::query()->orderBy('id')->get()
        );
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
    public function store(StoreTrCerRequest $request)
    {
        $data = $request->validated();
        $trCer = TrCer::create($data);
        return response(new TrCerResource($trCer),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(TrCer $trCer)
    {
        return new TrCerResource($trCer);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTrCerRequest $request, TrCer $trCer)
    {
        $data = $request->validated();
        $trCer->update($data);
        return new TrCerResource($trCer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TrCer $trCer)
    {
        $trCer->delete();
        return response('',204);
    }
}
