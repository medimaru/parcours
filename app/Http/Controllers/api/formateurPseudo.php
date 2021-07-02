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
            $pseudos = DB::select("
            select
                label as pseudo
            from
                pseudo
            where
                pseudo.langue = ? and upper(pseudo.label) not in (".$finalUsedPseudos.")", [($req->data['langue'])]);

            // return array_merge($intraUsedPseudo ,$usedPseudo);
            // return ($req->data['langue']);
            return $pseudos;
            

        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

}