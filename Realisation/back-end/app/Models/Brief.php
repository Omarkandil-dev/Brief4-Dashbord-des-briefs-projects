<?php

namespace App\Models;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Apprentice;

class Brief extends Model
{
    use HasFactory;
    public function task()
    {
        return $this->hasMany(Task::class);
    }
    public function targetApprentice()
    {
        return $this->belongsToMany(Apprentice::class);
    }
}
