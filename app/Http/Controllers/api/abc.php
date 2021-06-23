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
}