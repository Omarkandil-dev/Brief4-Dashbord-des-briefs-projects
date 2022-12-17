<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Brief;


class Task extends Model
{
    use HasFactory;
    public function brief()
    {

        return $this->belongsTo(Brief::class);
    }
    public function specificApprentice()
    {
        return $this->belongsToMany(Apprentice::class)->withPivot('taskStatus');
    }
    //brief 4 section ---------------------------
    public function taskAssign($StudentId, $id)
    {
    }
}
