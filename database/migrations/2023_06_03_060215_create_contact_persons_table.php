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
        Schema::create('contact_persons', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('name');
            $table->string('whatsapp')->nullable();
            $table->string('instagram')->nullable();
            $table->string('line')->nullable();
            $table->ulid('contact_personable_id')->constrained()->cascadeOnDelete();
            $table->string('contact_personable_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_persons');
    }
};
