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
            $table->ulid('id')->primary();
            $table->string('uid')->unique();
            $table->string('name');
            $table->string('email')->unique();
            $table->unsignedTinyInteger('role');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->ulid('selected_festival')->nullable();
            $table->ulid('avatar_id')->nullable()->constrained()->nullOnDelete();

            /*
             * Digunakan untuk acuan festival di mana user ditempatkan.
             * Acuan ini hanya digunakan oleh user dengan role manager (1) dan participant (2).
             * Null apabila user dengan role admin (0).
             *
             * column: festival_id
             * nullable
             */
            // $table->ulid('festival_id')->nullable()->constraint()->cascadeOnDelete();
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
