<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\BlogRequest;
use App\Models\Blog;
class BlogController extends Controller
{

    // For Admin user //
    public function blog()
    {
        $about = Blog::orderBy('id', 'desc')->paginate(10);
    
        if ($about->isEmpty()) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }
    
        return response()->json(['status' => 200, 'data' => $about], 200);
    }

    
    // For user ///
    public function publishedBlog()
    {
        $about = Blog::where('status','published')->orderBy('id', 'desc')->paginate(10);
    
        if ($about->isEmpty()) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }
    
        return response()->json(['status' => 200, 'data' => $about], 200);
    }

    public function blogStore(BlogRequest $request)
    {
        $imageName = $request->image->getClientOriginalName();
        $request->image->move(public_path('images'), $imageName);

        $postBlog = new Blog();
        $postBlog->title = $request->title;
        $postBlog->description = $request->description;
        $postBlog->image = $imageName;
        $postBlog->author = $request->author;
        $postBlog->type = $request->type;
        $postBlog->status = 'pending';       
        $postBlog->save();
        if(!$postBlog){
            return response()->json(['status',500, 'message','Internal server error'],500);
        }
        return response()->json(['status',200,  'data',$postBlog],200);
    }



    public function singleBlog(string $id)
    {
        $blog = Blog::where('id', $id)->first();
    
        if (!$blog) {
            return response()->json(['status' => 200, 'message' => 'Record not found'], 200);
        }
    
        return response()->json(['status' => 200, 'data' => $blog], 200);
    }

    public function updateBlog(Request $request)
    {
        $postBlog = Blog::find($request->id);
    
        if (!$postBlog) {
            return response()->json(['status' => 404, 'message' => 'Blog not found'], 404);
        }
    
        // Check if a new image is uploaded
        if ($request->hasFile('image')) {
            // Get the previous image path
            $previousImage = public_path('images') . '/' . $postBlog->image;
    
            // Unlink (delete) the previous image if it exists
            if (file_exists($previousImage)) {
                unlink($previousImage);
            }
    
            // Save the new image
            $imageName = $request->image->getClientOriginalName();
            $request->image->move(public_path('images'), $imageName);
            $postBlog->image = $imageName;
        }
    
        // Update only if the request field is not null
        $postBlog->title = $request->title ?? $postBlog->title;
        $postBlog->description = $request->description ?? $postBlog->description;
        $postBlog->author = $request->author ?? $postBlog->author;
        $postBlog->type = $request->type ?? $postBlog->type;
        $postBlog->status = $request->status ?? $postBlog->status;
    
        $postBlog->save();
    
        return response()->json(['status' => 200, 'data' => $postBlog], 200);
    }
    

    public function updateBlogStatus(Request $request)
    {
        $postBlog =  Blog::find($request->id);
        $postBlog->status = $request->status;
        $postBlog->save();
        if(!$postBlog){
            return response()->json(['status',500, 'message','Internal server error'],500);
        }
        return response()->json(['status',200,  'data',$postBlog],200);
    }

    public function destroyBlog($id)
    {
        $removeBlog = Blog::find($id);
        if($removeBlog){
            $removeBlog->delete();
            return response()->json(['status',200, 'message'=>'Delete you success blog information'],200);
        }

        return response()->json(['status',400, 'message'=>'Record not found'],200);
    }
}
