<?php

namespace App\Http\Controllers;

use App\Models\Apprentice;
use App\Models\Brief;
use Illuminate\Http\Request;
use App\Models\promotion;

class Searchnado extends Controller
{
    //
    public function search(Request $request)
    {
        if ($request->ajax()) {
            $input = $request->key;
            $display = "";
            $records = promotion::where('name', 'like', '%' . $input . "%")->get();
        }
        if ($records) {
            foreach ($records as $promo) {
                $display .= '<tr>
                <td>' . $promo->id . '</td>
                <td>' . $promo->name . '</td>
                <td>
        <a class ="btn btn-primary" href="Edit/' . $promo->id . '">Edit</a>
        <a class="btn btn-danger" href="Delete/' . $promo->id . '">Delete</a>
        <td>
                
                </tr>';
            }
            return Response($display);
        }
    }
    public function searchstudent($id, $input = null)
    {

        // dd($request->search);
        //  dd($data);
        if ($input == null) {
            $data = Apprentice::where('promotion_id', $id)->get();
            return $data;
        } else {
            $data = Apprentice::whereRaw("
            promotion_id = $id AND (
                first_name like '%$input%' OR
                last_name like '%$input%' OR
                email like '%$input%'
            )
        ")->get();
            return $data;
        }
    }
    public function searchbrief($input = null)
    {

        // dd($request->search);
        //  dd($data);
        if ($input == null) {
            $data = Brief::all();
            return $data;
        } else {
            $data = Brief::whereRaw("
             (
                name like '%$input%'
            
            )
        ")->get();
            return $data;
        }
    }
}
