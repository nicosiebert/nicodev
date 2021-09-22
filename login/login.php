<?php
require("../c.php");
if(isset($_POST['email'])){
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $cons = mysqli_query($c, "SELECT email, password1 FROM loginphp WHERE email = '$email' AND password1 = '$pass'");
    if(!$cons){
        echo json_encode('error_conexion');
    }else{
        $emails =null;
        $passs = null;
        foreach($cons as $list):
            $emails = $list['email'];
            $passs = $list['password1'];
        endforeach;
        if($emails === $email){
            echo json_encode(200);
        }else{
            echo json_encode(404);
        }
    }
}else{
    header('location: ../login');
}
?>
