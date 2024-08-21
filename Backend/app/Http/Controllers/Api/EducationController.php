<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Education;
use App\Http\Requests\EducationRequest;
class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $education = Education::orderBy('id', 'desc')->paginate(10);

        if ($education->isEmpty()) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }

        return response()->json(['status' => 200, 'data' => $education], 200);        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EducationRequest $request)
    {
        $postEdu = new Education();
        $postEdu->sumary = $request->sumary;
        $postEdu->degree = $request->degree;
        $postEdu->year = $request->year;
        $postEdu->university_name = $request->university_name;
        $postEdu->description = $request->description;             
        $postEdu->save();
        if(!$postEdu){
            return response()->json(['status',500, 'message','Internal server error'],500);
        }
        return response()->json(['status',200,  'data',$postEdu],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        $education = Education::where('id', $id)->first();

        if (!$education) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }

        return response()->json(['status' => 200, 'data' => $education], 200);        
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $postEdu =  Education::find($request->$id);
        $postEdu->sumary = $request->sumary ?? $postEdu->sumary;
        $postEdu->degree = $request->degree ?? $postEdu->degree;
        $postEdu->year = $request->year ?? $postEdu->year;
        $postEdu->university_name = $request->university_name ?? $postEdu->university_name;
        $postEdu->description = $request->description ?? $postEdu->description;             
        $postEdu->save();
        if(!$postEdu){
            return response()->json(['status',500, 'message','Internal server error'],500);
        }
        return response()->json(['status',200,  'data',$postEdu],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $removeEdu = Education::find($id);
        if($removeEdu){
            $removeEdu->delete();
            return response()->json(['status',200, 'message'=>'Delete you success education information'],200);
        }

        return response()->json(['status',400, 'message'=>'Record not found'],200);
    }
}
