<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apprentice;
use App\Models\promotion;
use Illuminate\Support\Facades\DB;


class apprentices_Controller extends Controller
{
    //
    public function FormRetriever($id)
    {
        return view('Studentadd', compact("id"));
    }
    public function Studentstore(Request $req)
    {

        $id = $req->id;

        $student = new Apprentice();
        $student->first_name = $req->first_name;
        $student->last_name = $req->last_name;
        $student->email = $req->email;
        $student->promotion_id = $id;
        $student->save();
        return redirect("Edit/" . $id);
    }
    // fct for retrieving the edit form alongside the data you wanna edit
    public function StudentFormRetriever($id)
    {
        $data = Apprentice::where('id', $id)->get();

        return view("StudentEdit", compact('data'));
    }
    public function StudentUpdate(Request $req, $id)

    { {

            $Student = Apprentice::where('id', $id)->update(["first_name" => $req->first_name, "last_name" => $req->last_name, "email" => $req->email]);
            $query = Apprentice::where('id', $id)->first();

            return redirect("Edit/" . $query->promotion_id);
        }
    }
    public function StudentDelete($id)
    {
        $query = Apprentice::where('id', $id)->first();
        $promo = $query->promotion_id;
        apprentice::where('id', $id)->delete();
        return redirect("Edit/" . $promo);
    }
    public function getStudents()
    {
        $students = Apprentice::all();
        $data = [];
        foreach ($students as $student) {
            $data[] = $student->promotion;
        }
        $students;
        return response()->json($students);
    }

    public function postStudent(Request $req)
    {
        $student = new Apprentice();
        $student->first_name = $req->first_name;
        $student->last_name = $req->last_name;
        $student->email = $req->email;
        $student->promotion()->associate($req->promotion_id);
        $student->save();
    }
    public function showPromotionStudens($id)
    {
        $Promotion = promotion::where("id", $id)->first();
        $Promotion->apprentice;
        $Promotion;
        return response()->json($Promotion);
    }
    public function getSingleStudent($id)
    {
        $student = Apprentice::where('id', $id)->first();
        // $student->assignedTask;
        return response()->json($student);
    }
    public function updateStudent(Request $req)
    { {

            $Student = Apprentice::where('id', $req->id)->update(["first_name" => $req->first_name, "last_name" => $req->last_name, "email" => $req->email]);
            // $query = Apprentice::where('id', $id)->first();

            // return redirect("Edit/" . $query->promotion_id);
        }
    }
    public function deleteStudentReq($id)
    {
        Apprentice::where("id", $id)->delete();
    }
}
