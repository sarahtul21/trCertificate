<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cer extends Model
{
    use HasFactory;
    protected $fillable=['name','passportNumber'];
}
