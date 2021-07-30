<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\lecturasController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("medidor/get", [lecturasController::class, "getMedidor"]);
Route::get("medida/get", [lecturasController::class, "getMedida"]);

Route::get("lecturas/get", [lecturasController::class, "getLectura"]);
Route::get("lecturas/filtrar", [lecturasController::class, "filtrarLecturas"]);

Route::post("lecturas/post", [lecturasController::class, "crearLectura"]);
Route::post("lecturas/delete", [lecturasController::class, "eliminarLectura"]);