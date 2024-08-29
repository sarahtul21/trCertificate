<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CerController;
use App\Http\Controllers\TrCerController;
use App\Models\Cer;

Route::get('/', function () {
    $cers=Cer::all();
    return view('welcome' , compact('cers'));
});

Route::get('/addCer', function () {
    return view('welcome');
});

Route::get('/cer', [CerController::class, 'index']);

