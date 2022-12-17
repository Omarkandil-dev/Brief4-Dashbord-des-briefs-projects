<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    //
    public function store(Request $request){
        $promotion = new Promotion;
        $promotion->name = $request->name;
        $promotion->save();
        return response()->json($promotion);
    }
    public function select(){
        $promotion = Promotion::all();
        return response()->json($promotion);
    }

    public function destroy($id){
        $promotion = Promotion::find($id);
        $promotion->delete();
        return response()->json($promotion);
    }

    public function edit($id){
        $promotion = Promotion::find($id);
        return response()->json($promotion);
    }

    public function update(Request $request,$id){
        $promotion = Promotion::find($id);
        $promotion->todo = $request->name;
        $promotion->save();
        return $promotion;
    }
}
