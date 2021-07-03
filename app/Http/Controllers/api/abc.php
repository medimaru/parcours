<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class abc extends Controller
{
    public function listAbsence()
    {
        try {
            $absence = DB::select('SELECT c.id as Agent ,a.id, dateAbsence, p.label AS pseudo, nom, ta.label AS type 
                    FROM typeabsence ta 
                    INNER JOIN absence a ON ta.id = a.type
                    INNER JOIN candidat c ON c.id = a.candidat
                    INNER JOIN
                     pseudo p on c.pseudo = p.id');
            return [
                "data" => $absence,
                "Absence successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function getIDs(Request $req){
        try {
        // return ($req->pseudo)["data"];
            $pseudoList = [];
            foreach (($req->pseudo)["data"] as $value) {
                array_push($pseudoList,"\"".$value."\"");
            }

            $query = "
            select
                c.id as id ,
                p.label as pseudo,
                c.compagne as compagne,
                (select objectif from notes where notes.compagne = c.compagne and label = 'absence' ) as absenceObj,
                (select coef from notes where notes.compagne = c.compagne and label = 'absence' ) as absenceCoef,
                (select objectif from notes where notes.compagne = c.compagne and label = 'rdv' ) as rdvObj,
                (select coef from notes where notes.compagne = c.compagne and label = 'rdv' ) as rdvCoef,
                (select objectif from notes where notes.compagne = c.compagne and label = 'appel' ) as appelObj,
                (select coef from notes where notes.compagne = c.compagne and label = 'appel' ) as appelCoef,
                (select count(id) from absence where absence.candidat = c.id and dateAbsence = curdate()) as Absence
            from
                candidat c
            left join
                pseudo p on c.pseudo = p.id
            where
                c.validation = 2 and p.label in (".implode(',', $pseudoList).")
            ";

            $ids = DB::select($query);

            return[
                "etat"=>1,
                "data"=>$ids,
                'pseudos'=>$pseudoList,
            ];
        } catch (\Throwable $th) {
            return[
                "etat"=>0,
                "msg"=>$th->getMessage()
            ];
        }
    }

    public function insertArchieve(Request $req){
        try {
            foreach (($req->data)['archieve'] as $value) {
                $value["Date"]= date("Y-m-d");
            }
            
            DB::table('archiveclassement')
            ->insert(($req->data)['archieve']);

            return[
                'etat'=>1
            ];
        } catch (\Throwable $th) {
            return [
                'etat'=>0,
                'msg'=>$th->getMessage()
            ];
        }
    }

    
}