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
        Schema::create('events', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name')->unique();
            $table->unsignedTinyInteger('type');
            $table->string('description')->nullable();
            $table->string('image')->nullable();
            $table->boolean('is_opened')->default(false);
            $table->unsignedInteger('price')->nullable();
            $table->string('held_in')->nullable();
            $table->dateTime('held_on')->nullable();
            $table->ulid('festival_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
