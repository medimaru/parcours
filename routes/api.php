<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("/listAbsence", 'api\abc@listAbsence');


//recruteur index
Route::get("/getNewCandidat",'api\recruteurAPI@getNewCandidat');
Route::get("/getFormationRecruteur",'api\recruteurAPI@getFormationId');
Route::get("/UpdateFormationCandidat", 'api\recruteurAPI@UpdateFormationCandidat');

//formateur index APIs
Route::get("/toggle",'api\formateurAPI@toggleAbsent');
Route::get("/Absent",'api\formateurAPI@Absent');
Route::get("/getFormation", 'api\formateurAPI@getFormation');

//formateur add formation APIS
Route::get("/getformation","api\addformation@getFormation");
Route::get("/addFormation","api\addformation@addFormation");
Route::get("/getTypeFormation","api\addformation@getTypeFormation");

//chef de plateau chefPlateauAffectation
Route::get("/getCandidatVtwo",'api\chefPlateauAffectation@getCandidatVtwo');
Route::get("/getCompagne", 'api\chefPlateauAffectation@getCompagne');
Route::get("/UpdateCompagneCandidat", 'api\chefPlateauAffectation@UpdateCompagneCandidat');

//formateur validation APIs
Route::get("/getCandidatV1", 'api\formateurValidation@getCandidatV1');
Route::get("/UpdateValidationCandidat",'api\formateurValidation@UpdateValidationCandidat');


//chefplateau campagne APIs
Route::get("/getNotes", 'api\chefPlateauCampaign@getNotes');
Route::get("/UpdateCompagneObjectif", 'api\chefPlateauCampaign@UpdateCompagneObjectif');

//chefPlateau abcFilter
Route::get("/getClassementDate", 'api\abcFilter@getClassementDate');

//chefplateau recyclage
Route::get("/UpdateNoRecyclageCandidat", 'api\recyclage@UpdateNoRecyclageCandidat');
Route::get("/getClassementC", 'api\recyclage@getClassementC');
Route::get("/UpdateRecyclageCandidat", 'api\recyclage@UpdateRecyclageCandidat');

//chefplateau absence
Route::get("/getTypeFormation", 'api\chefPlateauAbsence@getTypeFormation');
Route::get("/Absent/{id}",'api\chefPlateauAbsence@Absent');
Route::get("/toggle",'api\chefPlateauAbsence@toggleAbsent');


