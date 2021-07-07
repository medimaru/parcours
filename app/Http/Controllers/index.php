<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class index extends Controller
{
    public function index(Request $req){
        try {
            $emp = DB::select('select
                users.id,
                pseudo,
                nom,
                type,
                langue,
                l.label as language,
                t.label,
                t.root
            from
                users
            inner join
                typeuser t on t.id = users.type
            inner join
                langue l on l.id = users.langue
            where
                users.pseudo = ? and users.password = ?',[$req->pseudo,$req->password]);

            if (count($emp)==0) {
                return [
                    "etat"=>0,
                    "message"=>"no such data"
                ];
            }

            $req->session()->put(['emp'=> $emp[0]]);
            return [
                "etat"=>1,
                "emp"=>$emp[0]
            ];
        } catch (\Throwable $th) {
            return [
                "etat"=>2,
                "error"=>$th->getMessage()
            ];
        }
    }
    public function addCandidat(Request $req){
        try {
            DB::table('candidat')
            ->insert($req->all());
            return [
                'etat'=>1,
            ];
        } catch (\Throwable $th) {
            return [
                'etat'=>0,
                'msg'=>$th->getMessage()
            ];
        }
    }

    public function recruteurIndex (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 4) {
            return view('recruteurIndex',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function formateurIndex (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 5) {
            return view('formateurIndex',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function formateurValidation (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 5) {
            return view('formateurValidation',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function pseudo (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 5) {
            return view('pseudo',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }


    public function addformation (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 5) {
            return view('addformation',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function chefPlateauAffectation (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 2) {
            return view('chefplateauAffectation',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function chefPlateauSetCompagne (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 2) {
            return view('chefPlateauSetCompagne',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function chefPlateauAbcFilter (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 2) {
            return view('abcFilter',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function chefPlateauRecycle (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 2) {
            return view('chefPlateauRecycle',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function chefPlateauAbsence (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 2) {
            return view('chefPlateauAbsence',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
    public function abcCalcule (Request $req){
        $var = $req->session()->get('emp');
        if ($req->session()->has('emp') && $var->type == 2) {
            return view('abc',['langue'=>$var->langue]);
        }
        else {
            return redirect('/');
        }
    }
}