<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('passportNum');
            $table->string('applicationID');
            $table->date('examDate');
            $table->string('nationality');
            $table->number('documentID');
            $table->date('birthDate');
            $table->number('questionsNum');
            $table->number('correctsNum');
            $table->number('inCorrectsNum');
            $table->number('blanksNum');
            $table->number('score');
            $table->number('cerType');
            // $table->string('email')->unique();
            // $table->timestamp('email_verified_at')->nullable();
            // $table->string('password');
            // $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
