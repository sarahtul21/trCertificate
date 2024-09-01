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
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->string('passport')->nullable()->default(null);
            $table->string('application')->nullable()->default(null);
            $table->string('document')->nullable()->default(null);
            $table->string('nationality')->nullable()->default(null);
            $table->string('birth')->nullable()->default(null);
            $table->string('exam')->nullable()->default(null);
            $table->string('question')->nullable()->default(null);
            $table->string('correct')->nullable()->default(null);
            $table->string('incorrect')->nullable()->default(null);
            $table->string('blank')->nullable()->default(null);
            $table->string('score')->nullable()->default(null);
            $table->string('image')->nullable()->default(null);
            $table->string('type')->nullable()->default(null);
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
