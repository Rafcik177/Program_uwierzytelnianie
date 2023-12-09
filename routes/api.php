<?php

use App\Http\Controllers\MessagesController;
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

Route::group(['prefix' => 'messages'], function () {
    Route::get('public', [MessagesController::class, 'showPublicMessage']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('protected', [MessagesController::class, 'showProtectedMessage']);
        Route::get('admin', [MessagesController::class, 'showAdminMessage']);
    });
});
