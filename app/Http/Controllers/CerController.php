<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CerController extends Controller
{
    public function index(){
        return view('cer/index');
    }
}
