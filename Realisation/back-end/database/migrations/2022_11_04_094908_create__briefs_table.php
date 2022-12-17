<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('briefs', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->date("creation_date");
            $table->date("recuperation_date");
            $table->timestamps();
        });
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->date("starting_date");
            $table->date("finishing_date");
            $table->string("description");
            $table->unsignedBigInteger('brief_id'); //serve as the key which u'll reference the id of briefs(foreign)
            $table->foreign('brief_id')->references('id')->on('briefs')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('briefs');
        Schema::dropIfExists('tasks');
    }
};
