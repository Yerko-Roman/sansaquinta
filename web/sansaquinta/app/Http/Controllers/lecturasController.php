<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use  App\Models\lectura;

class lecturasController extends Controller
{
    public function getMedidor(){
        $medidor = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"];

        return $medidor;
    }
    public function getMedida(){
        $medida = array();
        $medida[] = "Kilowatts";
        $medida[] = "Watts";
        $medida[] = "Temperatura";

        return $marcas;
    }

    public function getLectura(){
        $lectura = lectura::all();
        return $lectura;
    }

    public function filtrarLecturas(Request $request){

        $filtro = $input["filtro"];
        $lecturas = lectura::where("medida", $filtro)->get(); 

        return $lectura;
    }

    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lectura = lectura::findOrFail($id);
        $lectura->delete();
        return "ok";
    }

    public function crearLectura(Request $request){
        $input = $request->all();
        $lectura = new lectura();
        $lectura->fecha = $input["fecha"];
        $lectura->hora = $input["hora"];
        $lectura->medidor = $input["medidor"];
        $lectura->direccion = $input["direccion"];
        $lectura->valor = $input["valor"];
        $lectura->medida = $input["medida"];

        $lectura->save();
        return $lectura;
    }
}
