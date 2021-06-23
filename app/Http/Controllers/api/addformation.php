<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class addformation extends Controller
{
    public function getFormation(Request $req)
    {
        try {  
            $test = DB::select('select f.id, dateDebut,dateFin,max,f.label as formation from formation f , typeFormation tf 
            where f.formationType=tf.id
            and f.langue=? 
             ORDER BY dateDebut
            ',[$req->langueId]);
            return [
                "data" => $test,
                "Formation successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function addFormation(Request $req)
    {
        try {
            DB::table('formation')
                ->insert([
                    'type' => $req->Type,
                    'dateDebut' => $req->DateDebut,
                    'dateFin' => $req->DateFin,
                    'max' => $req->Max,
                    'label' => $req->Label,
                    'formationType' => $req->FormationType,
                    'langue'=>$req->langueID
                ]);
            return "Formation successfully added";
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    public function getTypeFormation()
    {
        try {
            $data = DB::select('SELECT id, label from typeformation');
            return $data;
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}