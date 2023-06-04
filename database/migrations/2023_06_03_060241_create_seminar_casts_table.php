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
        Schema::create('seminar_casts', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name');
            $table->string('title')->nullable();
            $table->string('image')->nullable();
            $table->unsignedTinyInteger('role')->nullable();
            $table->ulid('seminar_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seminar_casts');
    }
};
