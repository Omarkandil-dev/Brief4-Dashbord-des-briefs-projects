<?php

use App\Http\Controllers\testController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
// Routes

Route::post('promotion',[testController::class,'store']); 
Route::get('promotion',[testController::class,'select']);
Route::delete('promotion/{id}',[testController::class,'destroy']);
Route::get('/promotion/{id}', [testController::class,'edit']);
Route::put('/promotion/{id}', [testController::class,'update']);