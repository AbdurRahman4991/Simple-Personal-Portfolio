<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\ExperinceController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::resource('/contact', ContactController::class);
Route::resource('/about', AboutController::class);
Route::resource('/education', EducationController::class);
Route::resource('/experince', ExperinceController::class);

Route::get('/blog',[BlogController::class, 'blog'] );
Route::get('/published/blog', [BlogController::class, 'publishedBlog'] );
Route::post('/store/blog', [BlogController::class, 'blogStore' ]);
Route::get('/single/blog/{id}', [BlogController::class, 'singleBlog' ]);
Route::post('/update/blog', [BlogController::class, 'updateBlog' ]);
Route::post('/update/blog/status', [BlogController::class, 'updateBlogStatus'] );
Route::get('/delete/blog/{id}',[BlogController::class, 'destroyBlog']);