<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Brief;



class Task_management extends Controller
{
    //
    public function taskFormRetriever($id)
    {
        return view('TaskAdd', compact("id"));
    }
    public function Taskstore(Request $request)

    {

        $id = $request->id;
        $task = new Task();
        $task->name = $request->name;
        $task->starting_date = $request->starting_date;
        $task->finishing_date = $request->finishing_date;
        $task->description = $request->description;
        $task->brief()->associate($id);
        $task->save();
        return redirect("/BriefIndex");
    }
    public function taskeditFormRetriever($id)
    {
        $data = Task::where('id', $id)->get();

        return view("EditTask", compact('data'));
    }
    public function updateTask(Request $req, $id)

    { {

            Task::where('id', $id)->update(["name" => $req->name, "starting_date" => $req->starting_date, "finishing_date" => $req->finishing_date, "description" => $req->description]);
            $query = Task::where('id', $id)->first();

            return redirect("EditBrief/" . $query->brief_id);
        }
    }
    public function taskdelete($id)
    {
        $query = Task::where('id', $id)->first();
        $brief = $query->brief_id;
        Task::where('id', $id)->delete();
        return redirect("EditBrief/" . $brief);
    }
}
