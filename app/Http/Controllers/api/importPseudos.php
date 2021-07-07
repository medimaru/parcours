<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Request\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class importPseudos extends Controller
{
    public function import(Request $req){
        
        try {
            // header("Access-Control-Allow-Origin: *");
            // $headers = [
            //     'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
            //     'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin'
            // ];
            $data = $req->data["pseudos"];
            // return $data;
            
            DB::table("pseudo")
            ->insert($data);
            return [
                "etat"=> 1
            ];
        } catch (\Throwable $th) {
            return $th;
        }
    }

}