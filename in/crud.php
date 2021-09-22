<?php

#conexion a la base de datos
function c(){
    return mysqli_connect(
     "127.0.0.1",
     "root",
     "",
     "php-mysql-crud"
  );
 }



class crud{

    #insert
    public function insert($DB, $P1, $P2){

        $sen = "INSERT INTO $DB($P1) VALUES($P2)";
        
        try{
            $ex = mysqli_query(c(), $sen);
            echo json_encode("todo ok");
        }
        catch(Exception $ex){
            echo json_encode("error", $ex);
        }

    }
    #select
    public function select($DB, $P1, $P2, $A){
        $sen = "SELECT $A FROM $DB WHERE $P1 = $P2";
        try{
            $ex = mysqli_query(c(), $sen);
        foreach($ex as $list){
            echo json_encode($list);
        }
        }catch(Exception $ex){
            echo json_encode("error", $ex);
        }

    }
    #update
    public function update($DB, $P1, $P2, $A){
        $sen = "UPDATE $DB SET $A WHERE $P1 = $P2";
        try{
            $ex = mysqli_query(c(), $sen);
            echo json_encode("datos actualizados con exito");
        }catch(Exception $ex){
            echo json_encode("error", $ex);
        }

    }
    #delete
    public function delete($DB, $P1, $P2){
        $sen = "DELETE FROM $DB WHERE $P1 = $P2";
        try{
            $ex = mysqli_query(c(), $sen);
            echo json_encode("datos eliminados con exito");
        }catch(Exception $ex){
            echo json_encode("error", $ex);
        }
    }

}


$crud  = trim($_POST['crud']);

$call = new crud();

#si la peticion es insert
if($crud === "insert"){
    $DB = $_POST['db'];

    $P1 = $_POST['p1'];

    $P2 = $_POST['p2'];

    $call -> insert($DB, $P1, $P2);

    
}
#si la peticion es select
elseif($crud === "select"){
    $DB = $_POST['db'];

    $P1 = $_POST['p1'];

    $P2 = $_POST['p2'];

    $A = $_POST['aa'];

    $call -> select($DB, $P1, $P2,$A);
 
}
elseif($crud === "update"){
    $DB = $_POST['db'];

    $P1 = $_POST['p1'];

    $P2 = $_POST['p2'];

    $A = $_POST['aa'];

    $call -> update($DB, $P1, $P2,$A);
 
}
elseif($crud === "delete"){
    $DB = $_POST['db'];

    $P1 = $_POST['p1'];

    $P2 = $_POST['p2'];

    $A = $_POST['aa'];

    $call -> delete($DB, $P1, $P2);
 
}else{
    echo json_encode("error en el crud");
}