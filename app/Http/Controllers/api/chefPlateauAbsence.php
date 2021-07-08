<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class chefPlateauAbsence extends Controller
{
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

    public function Absent($id)
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
                   c.validation = 2",
                []
            );
            return [
                'etat' => 1,
                'data' => $data
            ];
        } catch (\Throwable $th) {
            throw $th;
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