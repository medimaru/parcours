<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class formateurPseudo extends Controller
{
    public function getPseudo(Request $req){
        try {
            // return $req->data;
            $finalUsedPseudos =[];
            $intraUsedPseudo = $req->data["usedPseudos"];
            $usedPseudo = DB::select('
            select
               (select upper(label) from pseudo WHERE pseudo.id = c.pseudo) as pseudo
            FROM
                candidat c
            WHERE
                c.langue = ? and c.validation in (1,2)',[$req->data["langue"]]);

            foreach ($usedPseudo as $value) {
                array_push($intraUsedPseudo,$value->pseudo);
            }

            foreach ($intraUsedPseudo as $value) {
                array_push($finalUsedPseudos,"\"".$value."\"");
            }
            $finalUsedPseudos = implode(',', $finalUsedPseudos);
            $pseudosMr = DB::select("
            select
                id,
                sex,
                label as pseudo
            from
                pseudo
            where
                pseudo.langue = ? and pseudo.sex =2 and upper(pseudo.label) not in (".$finalUsedPseudos.")  limit 100", [($req->data['langue'])]);
            $pseudosMs = DB::select("
                select
                    id,
                    sex,
                    label as pseudo
                from
                    pseudo
                where
                    pseudo.langue = ? and pseudo.sex =1 and upper(pseudo.label) not in (".$finalUsedPseudos.") limit 100", [($req->data['langue'])]);


            return [
                'etat'=>1,
                'data'=>[
                    'msPseudo'=>$pseudosMs,
                    'mrPseudo'=>$pseudosMr
                ]
            ];
            

        } catch (\Throwable $th) {
            return [
                'etat'=>0,
                'data'=>$th->getMessage()
            ];
        }
    }

    public function getCandidat(Request $req){
        try {
            $candidate = DB::select('
            select
                c.id as id ,
                c.nom as nom,
                c.prenom as prenom,
                c.sex as sex, 
                ifnull((p.label),"aucun") as pseudo,
                ifnull((cp.label),"aucun") as compagne
            from
                candidat c
            left join
                pseudo p on p.id = c.pseudo
            left join
                compagne cp on cp.id = c.compagne
            left JOIN
            	formationcandidat fc on fc.candidat = c.id
            LEFT JOIN
            	formation f on f.id = fc.formation
            WHERE
            	c.validation = 1 and curdate() between f.dateDebut and f.dateFin and c.langue = ?
            ', [$req->langue]);

            return [
                'etat'=> 1,
                'data'=> $candidate
            ];
        } catch (\Throwable $th) {
            return [
                'etat'=> 0,
                'msg'=> $th->getMessage()
            ];
        }
    }

    public function affectPseudos(Request $req){
        try {
            // return $req->data["pseudos"];
            foreach ($req->data["pseudos"] as $value) {
                DB::table('candidat')
                ->where("id",$value["id"])
                ->update(["pseudo"=>$value["pseudo"]]);
            }
            return[
                'etat'=>1
            ];
        } catch (\Throwable $th) {
            return[
                'etat'=>0,
                'msg'=>$th->getMessage()
            ];
        }
    }

}