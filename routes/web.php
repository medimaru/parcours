<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function()
{
    session()->forget('ID');
    session()->flush();
    // return redirect('index2.php');
    return view('index');
});
Route::get('/abc', function()
{
    // session()->forget('ID');
    // session()->flush();
    // return redirect('index2.php');
    return view('abc');
});
Route::get('/externalAPI/addCandidat','index@addCandidat');

Route::get('/cnx','index@index');

Route::get('/recruteur','index@recruteurIndex');
Route::get('/formateur','index@formateurIndex');
Route::get('/formateur/addFormation','index@addFormation');
Route::get('/formateur/validation','index@formateurValidation');
Route::get('/formateur/pseudo','index@pseudo');
Route::get('/chefPlateau/affectation','index@chefPlateauAffectation');
Route::get('/chefPlateau/Compagne','index@chefPlateauSetCompagne');
Route::get('/chefPlateau/abcFilter','index@chefPlateauAbcFilter');
Route::get('/chefPlateau/recycle','index@chefPlateauRecycle');
Route::get('/chefPlateau/absence','index@chefPlateauAbsence');
Route::get('/chefPlateau/abcCalcule','index@abcCalcule');
