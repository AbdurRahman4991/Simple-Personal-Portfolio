<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AboutRequest;
use App\Models\About;
class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $about = About::orderBy('id', 'desc')->first();
        
        // If no record is found, return a 404 status code
        if (!$about) {
            return response()->json(['status' => 404, 'message' => 'No record found'], 404);
        }
        
        // Decode skill and image for the item
        $about->image = json_decode($about->image, true);
        $about->skill = json_decode($about->skill, true);
        
        return response()->json(['status' => 200, 'data' => $about], 200);
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
    public function store(AboutRequest $request)
{
    // Check if a record with the same id already exists
    $postAbout = About::where('id', $request->id)->first();

    $images = [];
    if ($files = $request->file('image')) {
        foreach ($files as $file) {
            $name = $file->getClientOriginalName();
            $file->move('image', $name);
            $images[] = $name;
        }
    }

    if ($postAbout) {
        // Record exists, so update it
        // Unlink the old images if new images are uploaded
        if (!empty($images)) {
            foreach (json_decode($postAbout->image) as $oldImage) {
                if (file_exists(public_path('image/' . $oldImage))) {
                    unlink(public_path('image/' . $oldImage));
                }
            }
            $postAbout->image = $images;
        }

        $postAbout->name = $request->name;
        $postAbout->phone = $request->phone;
        $postAbout->description = $request->description;
        $postAbout->address = $request->address;
        $postAbout->skill = $request->skill;
        $postAbout->save();
    } else {
        // Record does not exist, so create a new one
        $postAbout = new About();
        $postAbout->name = $request->name;
        $postAbout->email = $request->email;
        $postAbout->image = json_encode($images);
        $postAbout->phone = $request->phone;
        $postAbout->description = $request->description;
        $postAbout->address = $request->address;
        $postAbout->skill = json_encode($request->skill);
        $postAbout->save();
    }

    if (!$postAbout) {
        return response()->json(['status' => 500, 'message' => 'Internal server error'], 500);
    }

    return response()->json(['status' => 200, 'data' => $postAbout], 200);
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $about = About::where('id', $id)->first();
    
        if (!$about) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }
    
        // Decode skill and image fields
        $about->image = json_decode($about->image, true);
        $about->skill = json_decode($about->skill, true);
    
        return response()->json(['status' => 200, 'data' => $about], 200);
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
