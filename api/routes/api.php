<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Models\Employee;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/employees', [EmployeeController::class,'index']);
Route::post('/store', [EmployeeController::class, 'store']);
Route::get('/edit/{id}', [EmployeeController::class, 'edit']);
Route::post('/update/{id}', [EmployeeController::class, 'update']);
Route::delete('/delete/{id}', [EmployeeController::class, 'destroy']);