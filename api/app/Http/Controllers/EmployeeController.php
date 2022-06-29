<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();
        if ($employees->count() > 0) {
            return response($employees, Response::HTTP_OK);
        } else {

            $message = "No employees found";
            return response(["error" => $message], Response::HTTP_NOT_FOUND);
        }
    }

    public function store(Request $request)
    {
        $employee = new Employee;
        $employee->staff = $request->staff;
        $employee->position = $request->position;
        $employee->salary = $request->salary;
        $employee->save();
        return response($employee, Response::HTTP_CREATED);
    }

    public function edit($id){
        $employee = Employee::findOrFail($id);
        return response($employee, Response::HTTP_OK);
    }
    
    public function update(Request $request)
    {
        $employee = Employee::findOrFail($request->id);
        $employee->staff = $request->staff;
        $employee->position = $request->position;
        $employee->salary = $request->salary;

        $employee->save();
        return response($employee, Response::HTTP_OK);
    }

    public function destroy($id)
    {
        try {
            $employee = Employee::find($id);
            if ($employee) {
                $employee->delete();
                return response(["Message" => "employee deleted"], Response::HTTP_OK);
            } else {
                $message = "employee not found";
                return response(["error" => $message], Response::HTTP_NOT_FOUND);
            }
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            return response(["error" => $message], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
