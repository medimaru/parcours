<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class formateurAPI extends Controller
{
    public function getFormation(Request $req)
    {
        try {  
            $test = DB::select('select f.id, dateDebut,dateFin,max,f.label as formation from formation f , typeFormation tf 
            where f.formationType=tf.id
            and f.langue=? and curdate() between f.dateDebut and dateFin
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

    public function Absent(Request $req)
    {
        try {
            $data = DB::select(
                "select
                    c.id,
                    c.nom,
                    c.prenom,
                    fc.formation as  formation,
                    IF(EXISTS(select * from absence where absence.candidat=c.id and absence.dateAbsence = CURDATE() and type=1),true,false) as 'absence matin',
                    IF(EXISTS(select * from absence where absence.candidat=c.id and absence.dateAbsence = CURDATE() and type=2),true,false) as 'absence soir'
                from
                    candidat c
                inner join
                    formationcandidat fc on fc.candidat = c.id
                inner join
                    formation f on f.id = fc.formation
                where
                   curdate() between f.dateDebut and f.dateFin and  f.id=?",[$req->id] 
            );
            return [
                'etat' => 1,
                'data' => $data
            ];
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function toggleAbsent(Request $req)
    {
        try {
            $curdate = date("Y-m-d");
            $data = DB::select(
                "select
                    *
                from 
                    absence
                where
                    candidat = ? and type = ? and DATE(dateAbsence) = CURDATE()",
                [$req->ID, $req->type]
            );
            if (count($data) > 0) {
                DB::table("absence")
                    ->where([
                        ['candidat', $req->ID],
                        ['type', $req->type]
                    ])->whereDate(
                        'dateAbsence',
                        '=',
                        $curdate
                    )->delete();
            } else {
                DB::table('absence')
                    ->insert(
                        array(
                            'candidat' => $req->ID,
                            'type' => $req->type,
                            'formation' => $req->formation,
                            'dateAbsence' => $curdate
                        )
                    );
            }
            return [
                'etat' => 1,
                'Msg' => "Update absence effectuer.",
            ];
        } catch (\Throwable $th) {
            return [
                'etat' => 0,
                'error' => $th->getMessage()
            ];
        }
    }

}