<?php

use App\Http\Controllers\PostsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'v1',
    'as' => 'api.v1.'
], function () {
    Route::group([
        'prefix' => 'posts',
        'as' => 'posts.'
    ], function () {
        Route::get('/', [PostsController::class, 'index'])->name('index');
        Route::get('{id}', [PostsController::class, 'show'])->name('show');
    });
});

