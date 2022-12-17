<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Brief;

class Apprentice extends Model
{
    use HasFactory;

    public function promotion()
    {
        return $this->belongsTo(promotion::class);
    }
    use HasFactory;


    public function assignedBrief()
    {
        return $this->belongsToMany(Brief::class);
    }
    public function assignedTask()
    {

        return $this->belongsToMany(Task::class)->withPivot('taskStatus');
    }
}
