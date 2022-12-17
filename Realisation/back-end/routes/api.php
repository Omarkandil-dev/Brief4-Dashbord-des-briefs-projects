<?php

use App\Http\Controllers\apprentices_Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Crud_Operation;
use App\Http\Controllers\brief_management;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("promotions/", [Crud_Operation::class, 'show']);
Route::get("promotions/{id}", [Crud_Operation::class, 'showSinglePromotion']);
Route::post('promotions', [Crud_Operation::class, 'addpromotions']);
Route::put('promotions/{id}', [Crud_Operation::class, 'promotionsedit']);
Route::delete('promotions/{id}', [Crud_Operation::class, 'deletePromo']);
//--------------------Brief Api Description--------------------
Route::get("/Briefs", [brief_management::class, 'getBriefs']);
Route::post("Briefs",  [brief_management::class, 'postBrief']);
Route::get("/Briefs/{id}", [brief_management::class, 'getSingleBrief']);
Route::put("/Briefs/{id}", [brief_management::class, 'UpdateSpecificBrief']);
Route::delete("/Briefs/{id}", [brief_management::class, 'DeleteSpecificBrief']);
//----------------------Student Api Description----------------------------------
Route::get("/Students", [apprentices_Controller::class, "getStudents"]);
Route::post("Students",[apprentices_Controller::class, "postStudent"]);
Route::get("promotions/{id}/show",[apprentices_Controller::class,'showPromotionStudens']);
Route::get("Students/{id}",[apprentices_controller::class,"getSingleStudent"]);
Route::put("Students/{id}",[apprentices_Controller::class,"updateStudent"]);
Route::delete("Students/{id}",[apprentices_Controller::class,"deleteStudentReq"]);
