<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class recyclage extends Controller
{
    public function getClassementC(Request $req)
    {
        try {
            // $agentName = DB::select('SELECT distinct Agent FROM archiveclassement where Date BETWEEN ? and ?', [$req->dateDebut, $req->dateFin]);
            $agentName = DB::select("SELECT
                distinct idCandidat ,
                ifnull((select label from candidat left join pseudo on candidat.pseudo = pseudo.id where candidat.id = idCandidat),'aucun') as Agent,
                ifnull((select etatCandidat from candidat where candidat.id = idCandidat),'0') as 'dejaR'
            FROM
                archiveclassement
            inner join candidat on candidat.id = archiveclassement.idCandidat
            where 
                Date BETWEEN ? and ? and candidat.validation = 2", [$req->dateDebut, $req->dateFin]);
            $agent = DB::select('SELECT distinct a.* FROM archiveclassement a where Date BETWEEN ? and ?', [$req->dateDebut, $req->dateFin]);
            foreach ($agent as $element) {
                $countA = DB::select('SELECT count(*) AS A  FROM archiveclassement where idCandidat = ? and classement = ? ', [$element->idCandidat, "A"]);
                $countB = DB::select('SELECT count(*) AS B  FROM archiveclassement where idCandidat = ? and classement = ? ', [$element->idCandidat, "B"]);
                $countC = DB::select('SELECT count(*) AS C  FROM archiveclassement where idCandidat = ? and classement = ? ', [$element->idCandidat, "C"]);
                $pseudo = DB::select("select ifnull(label,'aucun') as label from candidat left join pseudo on pseudo.id = candidat.pseudo where candidat.id = ? limit 1", [$element->idCandidat]);
                $countName = DB::select('SELECT count(*) AS NameCount  FROM archiveclassement where idCandidat = ? ', [$element->idCandidat]);
                $data[] = [
                    "idCandidat" => $element->idCandidat,
                    "Agent" => ($pseudo[0]->label),
                    "NbrA" => $countA[0]->A,
                    "NbrB" => $countB[0]->B,
                    "NbrC" => $countC[0]->C,
                    "Point" => $element->Point,
                    "CountName" => $countName[0]->NameCount
                ];
            };
            return [
                "data" => $data,
                "agent" => $agentName,
                "Classement ABC successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function UpdateRecyclageCandidat(Request $req)
    {
        try {
            foreach ($req->data as $user) {
                DB::table('causecandidat')
                    ->insert([
                        "message" => $req->message,
                        "idCandidat"=>$user
                    ]);
                    DB::table('candidat')
                    ->where('id', '=',$user)
                    ->update([
                        "etatCandidat" => $req->etatCandidat,
                        "validation" => $req->validation
                    ]);
                }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
    public function UpdateNoRecyclageCandidat(Request $req)
    {
        try {
            foreach ($req->data as $user) {
                DB::table('causecandidat')
                    ->insert([
                        "message" => $req->message,
                        "idCandidat"=>$user
                    ]);
                    DB::table('candidat')
                    ->where('id', '=',$user)
                    ->update([
                        "etatCandidat" => $req->etatCandidat,
                        "validation" => 0
                    ]);
                }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}