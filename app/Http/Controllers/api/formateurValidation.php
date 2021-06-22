<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class formateurValidation extends Controller
{
    public function getCandidatV1(Request $req)
    {
        try {
            $data = DB::select('SELECT c.id,nom,prenom,telephone,experience,CIN,nationalite,email,adresse,l.label as langue FROM CANDIDAT as c,langue as l 
            where validation = 1  
            and c.langue=l.id 
            and langue=?', [$req->langueID]);
            return [
                "data" => $data,
                "Candidats successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    
    public function UpdateValidationCandidat(Request $req)
    {
        foreach ($req->data as $user) {
            DB::table('candidat')
                ->where('id', '=', $user['id'])
                ->update([
                    "validation" => $req->validation
                ]);
        }
    }
}