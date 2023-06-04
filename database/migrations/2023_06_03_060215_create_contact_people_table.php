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
        Schema::create('contact_people', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name');
            $table->string('whatsapp')->nullable();
            $table->string('line')->nullable();
            $table->string('instagram')->nullable();
            $table->boolean('is_global')->default(false);
            $table->ulid('event_id')->nullable()->constrained()->cascadeOnDelete();
            $table->ulid('festival_id')->nullable()->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_people');
    }
};
