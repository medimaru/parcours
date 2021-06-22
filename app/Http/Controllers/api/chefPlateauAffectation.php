<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class chefPlateauAffectation extends Controller
{
    public function getCompagne(Request $req)
    {
        try {
            $compagne = DB::select('SELECT * from compagne where langue=?',[$req->langueID]);
            return [
                "data" => $compagne,
                "Compagne successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    public function getCandidatVtwo()
    {
        try {
            $data = DB::select('SELECT c.id,c.nom,c.prenom, v.label as Formation,p.label as Pseudo, c.telephone, c.compagne
            FROM candidat c,pseudo p,validation v
            where p.id=c.pseudo
            and c.validation=v.id
            and validation = 2');
            return [
                "data" => $data,
                "Candidats successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    public function UpdateCompagneCandidat(Request $req)
    {
        try{
            foreach ($req->data as $user) {
                DB::table('candidat')
                ->where('id', '=', $user['id'])
                    ->update([
                        "compagne" => $req->compagne
                    ]);
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}