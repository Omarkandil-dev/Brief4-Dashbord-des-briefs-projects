<?php

use App\Http\Controllers\apprentices_Controller;
use App\Http\Controllers\brief_management;
use App\Http\Controllers\Crud_Operation;
use App\Http\Controllers\Searchnado;
use App\Http\Controllers\Task_management;
use App\Models\Apprentice;
use App\Models\Brief;
use App\Models\Task;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//when you hit add i want u to grab the controller u  made and call out the method display 
Route::get('/add', [Crud_Operation::class, 'form_Page'])->name('form_Page');

//when you hit the create as a post request from a form ,grab the request instance copy and callout the method insert within the controller
Route::Post('/add', [Crud_Operation::class, 'Insert'])->name('insert');
//when you hit the /index i want you to go to ur database fetch all of the data and display em 
Route::get('/index', [Crud_Operation::class, 'index'])->name('index');
//--------------------------Standard Route--------------------------------------
//Route for retrieving data 
Route::get('Edit/{id}', [Crud_Operation::class, 'Retriever']);
//Route for updating data 
Route::post('update/{id}', [Crud_Operation::class, 'update']);
//Route for deleting data 
Route::get("Delete/{id}", [Crud_Operation::class, 'delete']);
//------------------premium Route and version------------------------


Route::get("Studentadd/{id}", [apprentices_Controller::class, 'FormRetriever']);




//Route for updating Student information


Route::post("Studentstore", [apprentices_Controller::class, 'Studentstore']);



//search route for promotion
Route::get("search", [Searchnado::class, 'search']);

///okay the retriever of the editing form ------------------------

Route::get("Edit/Edit/{id}", [apprentices_Controller::class, 'StudentFormRetriever']);
//updating post route 
Route::post('Edit/update/{id}', [apprentices_Controller::class, 'StudentUpdate']);
//delete route
Route::get("Edit/Delete/{id}", [apprentices_Controller::class, 'StudentDelete']);
//search route fpr student.......................
Route::get('searchstudent/{id}', [Searchnado::class, 'searchstudent']);
//search route for student when you type something
Route::get('/searchstudent/{id}/{input}',  [Searchnado::class, 'searchstudent']);



//tesground
Route::get("test", function () {
    $promotion = new App\Models\promotion;
    $promotion->name = "solo ";
    $promotion->save();
    $apprentice = new App\Models\Apprentice;
    $apprentice->first_name = "mohad";
    $apprentice->last_name = "chellout";
    $apprentice->email = "chelt@nakiss.com";
    $apprentice->promotion()->associate($promotion);
    $apprentice->save();
    return $apprentice;
});
//Briefmanagement index page
Route::get("BriefIndex", function () {
    return view("BriefIndex");
});

Route::get("/addBrief", [brief_management::class, 'briefFormRetriever']);
Route::Post('/addBrief', [brief_management::class, 'InsertBrief']);
Route::get('/BriefIndex', [brief_management::class, 'indexBrief']);
Route::get('EditBrief/{id}', [brief_management::class, 'Retriever_brief']);
Route::post('updateBrief/{id}', [brief_management::class, 'updateBrief']);
Route::get("DeleteBrief/{id}", [brief_management::class, 'deleteBrief']);
//----------------------- tasks managements hehehe Ya boih-----------------

Route::get("addTask/{id}", [Task_management::class, 'taskFormRetriever']);
Route::post("Taskstore/", [Task_management::class, 'Taskstore']);
Route::get("EditBrief/TaskEdit/{id}", [Task_management::class, 'taskeditFormRetriever']);
Route::post("EditBrief/update/{id}", [Task_management::class, "updateTask"]);
Route::get("EditBrief/TaskDelete/{id}", [Task_management::class, 'taskdelete']);
Route::get("/searchbrief", [Searchnado::class, 'searchbrief']);
Route::get("/searchbrief/{input}", [Searchnado::class, 'searchbrief']);
//----------- lets assign hehe YA boih------------

Route::get("/BriefAssign/{id}", [brief_management::class, 'displayApprentices']);
Route::get('/BriefAssign/{briefId}/Attach/{id}', [brief_management::class, 'attachBrief']);
Route::get('/BriefAssign/{briefId}/Detach/{id}', [brief_management::class, 'detachBrief']);
//-------assign for all promotions------------------------------------------------
Route::get('BriefAssign/{briefId}/AttachClass/{id}', [brief_management::class, 'assignClass']);
//-------------------- API with laravel------------------------------------------------

Route::get("Task/{StudentId}/{id}", [Task_management::class, "taskAssign"]);
