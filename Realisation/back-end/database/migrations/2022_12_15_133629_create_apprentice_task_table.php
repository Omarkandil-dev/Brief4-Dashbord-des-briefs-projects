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
        Schema::create('apprentice_task', function (Blueprint $table) {
            $table->id();
            $table->integer("taskStatus");
            $table->unsignedBigInteger('apprentice_id');
            $table->foreign("apprentice_id")->references('id')->on('apprentices')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('task_id');
            $table->foreign("task_id")->references('id')->on('tasks')->onDelete('cascade')->onUpdate('cascade');

            $table->timestamps();
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apprentice_task');
    }
};
