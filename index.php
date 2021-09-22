<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut ico" href="favicon.png">
    <title>Nicodev</title>

</head>
<body class="body">
    <noscript class="noscript">DEBES ACTIVAR JAVASCRYPT EN TU NAVEGADOR</noscript>
    <!-- header incioo-->
    <header class="header">
        <div id="menu"class="header-menu">
            <span class="menb"></span>
            <span class="menb"></span>
            <span class="menb"></span>
        </div>

        <div class="header-logo">
            &nbsp
            Nicodev
            <img src="" alt="">
        </div>

        <div class="header-car" id="hc">
            <img src="img/carrito-de-compras.svg" alt="">
        </div>
    </header>
    <!-- header final -->

    <!-- nav inicio -->
    <nav id="nav" class="nav br-r invisible">
        <div class="nav-container">

            <a class="nav-list" href="">Inicio </a>
            <a class="nav-list"' href="">Mi perfil</a>
            <a class="nav-list"' href="">Carrito</a>
            <br>
            <ul></ul>

            <a class="nav-list1 mt5" href="">Susripcion Newsletter</a>
            <a class="nav-list1" href="">Nosotros</a>

        </div>
    </nav>

    <div id="nav-fondo" class="nav-fondo invisible"></div>
    <!-- nav bar final -->

    <!-- includes -->
    <div class="carrito1 carr"></div>
    <div class="carritoF"></div>
    <div class="carrito">
        
        <?php include('carrito.php') ?>
        
    </div>
    <div class="compra_end_padre invisible">
     <br>
        <div class="compra_end_hijo">
        <img src="img\mantenimiento.png" alt="">
        <h4>Ups! esta funcionalidad no esta disponible, solo es un ejemplo🧐</h4>
        <h6>👇(presione cualquier parte para continuar)👆</h6>
        </div>
    </div>
    <!-- fin includes -->


    <!-- SECTION INICIO -->
    <section id="section" class="section">
        <div class='section-container'>
            <?php require('productos.php');  ?> 
        </div>
    </section>
    <!-- SECTION FINAL -->
    <footer class="footer br-t"> 
        <div class="footer-container">
            <ul class="footer-list-container">

                <li class="footer-list">© Nicodev </li><br><li class="footer-list">Powered by CRISTIAN NICOLAS SIEBERT</li> <!-- <li class="footer-list">Privacidad</li> -->

            </ul>
        </div>
    </footer>


<script src="js/const.js"></script>
<script src="js/header-nav.js"></script>
<script src="js/carrito.js"></script>



</body>
</html>