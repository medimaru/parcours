<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class recruteurAPI extends Controller
{
    public function getNewCandidat(Request $req){
        try {
            $data = DB::select('SELECT c.id,nom,prenom,telephone,experience,CIN,nationalite,email,adresse,l.label as langue FROM CANDIDAT as c,langue as l where validation is NULL and c.langue=l.id and langue=?',[$req->langueID]);
            return [
                "data" => $data,
                "Candidats successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function UpdateFormationCandidat(Request $req){
        $max = DB::table('formation')->select('max')->where('formation.id', '=', $req->Formation)->first()->max;
        $countAgent = DB::table('formationcandidat')
            ->select(DB::raw('count(*) as user_count'))
            ->where('formationcandidat.formation', '=', $req->Formation)
            ->first()->user_count;
        $countSelectedAgent = count($req->data);
        $somme = $countSelectedAgent + $countAgent;
            if ($somme <= $max) {
            foreach ($req->data as $user) {
                    DB::table('candidat')
                        ->where('id', '=', $user['id'])
                        ->update([
                            'nom' => $user['nom'],
                            'prenom' => $user['prenom'],
                            "validation" => $req->validation
                        ]);
                    DB::table('formationcandidat')->insert([
                        'candidat' => $user['id'],
                        'formation' => $req->Formation,
                    ]);
                }
                return "1";
            }
            else return "0";
    }

    public function getFormationId(Request $req){
        try {
            $formation = DB::select('SELECT f.id, dateDebut,dateFin,max,f.label as Flabel,tf.label as formation from formation f , typeFormation tf where f.formationType=tf.id and langue=?
            and DATEDIFF(f.dateDebut , curdate())>0', [$req->langueID]);
            return [
                "data" => $formation,
                "Formation successfully imported"
            ];
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

}