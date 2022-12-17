<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brief;
use App\Models\Task;
use App\Models\Apprentice;

class brief_management extends Controller
{
    //
    public function briefFormRetriever()
    {
        return view("addBrief");
    }
    public function InsertBrief(Request $req)
    {
        $brief = new Brief();
        $brief->name = $req->name;
        $brief->creation_date = $req->creation_date;
        $brief->recuperation_date = $req->recupration_date;
        $brief->save();
        return redirect("BriefIndex");
    }
    public function indexBrief()
    {
        $brief = Brief::all(); //this is a static method inherited by Brief display all rows
        return view("BriefIndex", compact('brief'));
    }
    public function Retriever_brief($id)
    {

        $briefdata = Brief::where('id', $id)->first();
        $briefDATA = $briefdata->task;

        $brief = Brief::where('id', $id)->get();

        return view("EditBrief", compact('brief', 'briefDATA'));
    }
    public function updateBrief(Request $req, $id)
    {
        Brief::where('id', $id)->update(["name" => $req->name, "creation_date" => $req->creation_date, "recuperation_date" => $req->recuperation_date]);
        return redirect("BriefIndex");
    }
    public function DeleteBrief($id)
    {
        Brief::where('id', $id)->delete();
        return redirect("BriefIndex");
    }

    public function displayApprentices($id)
    {
        $data = Apprentice::all();
        $briefId = $id;
        return view("BriefAssignement", compact('data', 'briefId'));
    }

    public function attachBrief($briefId, $id)
    {



        $brief = Brief::where('id', $briefId)->first();
        $student = Apprentice::where('id', $id)->first();
        if ($student->assignedBrief()->exists()) {
            $student->assignedBrief()->detach($briefId);
            $student->assignedBrief()->save($brief);
            return redirect('BriefAssign/' . $briefId);
        } else {


            $student->assignedBrief()->save($brief);

            return redirect('BriefAssign/' . $briefId);
        }
    }
    public function detachBrief($briefId, $id)
    {
        $apprentice = Apprentice::where('id', $id)->first();
        $apprentice->assignedBrief()->detach($briefId);
        return redirect('BriefAssign/' . $briefId)->with('brief', 'brief Detached successfully.');
    }
    public function assignClass($briefId, $id)
    {
        $apprentice = Apprentice::all();
        foreach ($apprentice as $app) {
            if ($app->assignedBrief()->exists()) {
                $app->assignedBrief()->detach($briefId);
            }
            $app->assignedBrief()->attach($briefId);
        }
        return redirect('BriefAssign/' . $briefId);
    }
    //------------Api Section---------------------------------------
    public function getBriefs()
    {
        $brief = Brief::all(); //this is a static method inherited by Brief display all rows
        return response()->json($brief);
    }


    public function postBrief(Request $req)
    {
        $brief = new Brief();
        $brief->name = $req->name;
        $brief->creation_date = $req->creation_date;
        $brief->recuperation_date = $req->recuperation_date;
        $brief->save();
    }
    public function getSingleBrief($id)
    {
        $brief = Brief::where('id', $id)->first();
        $brief->task;
        $brief->targetApprentice;
        $brief;
        $data = [];
        $students = $brief->targetApprentice;
        foreach ($students as $student) {
            $data[] = $student->assignedTask;
        }
        $brief;

        return response()->json($brief);
    }
    public function UpdateSpecificBrief(Request $req, $id)
    {
        Brief::where('id', $id)->update(["name" => $req->name, "creation_date" => $req->creation_date, "recuperation_date" => $req->recuperation_date]);
    }
    public function DeleteSpecificBrief($id)
    {
        Brief::where('id', $id)->delete();
    }
}
