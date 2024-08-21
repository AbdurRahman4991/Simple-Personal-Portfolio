<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contact = Contact::orderBy('id', 'desc')->paginate(10);
    
        if ($contact->isEmpty()) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }
    
        return response()->json(['status' => 200, 'data' => $contact], 200);
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
    public function store(ContactRequest $request)
    {
        $postContact = new Contact();
        $postContact->name = $request->name;
        $postContact->email = $request->email;
        $postContact->subject = $request->subject;
        $postContact->message = $request->message;
        $postContact->save();
        if(!$postContact){
            return response()->json(['status',500, 'message','Internal server error'],500);
        }
        return response()->json(['status',200, 'data',$postContact],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $removeContact = Contact::find($id);
        if($removeContact){
            $removeContact->delete();
            return response()->json(['status',200, 'message'=>'Delete you success contact information'],200);
        }

        return response()->json(['status',400, 'message'=>'Record not found'],200);

    }
}
