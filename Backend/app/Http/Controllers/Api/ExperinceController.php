<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Experince;
use App\Http\Requests\ExperinceRequest;
class ExperinceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experince = Experince::orderBy('id', 'desc')->paginate(10);

        if ($experince->isEmpty()) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }

        return response()->json(['status' => 200, 'data' => $experince], 200);
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
    public function store(ExperinceRequest $request)
    {
        $postExper = new Experince();
        $postExper->degination = $request->degination;
        $postExper->company_name = $request->company_name;
        $postExper->year = $request->year;
        $postExper->address = $request->address;
        $postExper->responsibility = json_decode($request->responsibility);             
        $postExper->save();
        if(!$postExper){
            return response()->json(['status',500, 'message','Internal server error'],500);
        }
        return response()->json(['status',200,  'data',$postExper],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $experince = Experince::where('id', $id)->first();

        if (!$experince) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }

        return response()->json(['status' => 200, 'data' => $experince], 200);        
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $postExper =  Experince::find($request->$id);
        $postExper->degination = $request->degination  ?? $postExper->degination;
        $postExper->company_name = $request->company_name ?? $postExper->company_name;
        $postExper->year = $request->year?? $postExper->year;
        $postExper->address = $request->address?? $postExper->address;
        $postExper->responsibility = json_encode($request->responsibility)?? $postExper->responsibility;             
        $postExper->save();
        if(!$postExper){
            return response()->json(['status',500, 'message','Internal server error'],500);
        }
        return response()->json(['status',200,  'data',$postExper],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $removeExper = Education::find($id);
        if($removeExper){
            $removeExper->delete();
            return response()->json(['status',200, 'message'=>'Delete you success experince information'],200);
        }

        return response()->json(['status',400, 'message'=>'Record not found'],200);
    }
}
