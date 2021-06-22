<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class chefPlateauCampaign extends Controller
{
    public function getNotes()
    {
        try {
            $rdv = DB::select('SELECT * FROM `notes` ORDER BY label');
            return [
                "data" => $rdv,
                "Compagne successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    
    public function UpdateCompagneObjectif(Request $req)
    {
        try {
            DB::table('notes')
                ->where('compagne', '=', $req->compagneID)
                ->where('label', '=', $req->absence)
                ->update([
                    "objectif" => $req->objectifAbsence,
                    "coef" => $req->coefAbsence,
                ]);
            DB::table('notes')
                ->where('compagne', '=', $req->compagneID)
                ->where('label', '=', $req->rdv)
                ->update([
                    "objectif" => $req->objectifRdv,
                    "coef" => $req->coefRdv,
                ]);
            DB::table('notes')
                ->where('compagne', '=', $req->compagneID)
                ->where('label', '=', $req->appel)
                ->update([
                    "objectif" => $req->objectifAppel,
                    "coef" => $req->coefAppel,
                ]);
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}