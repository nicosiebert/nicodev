<?php
    include ('c.php');
    $ex = mysqli_query($c,'SELECT * FROM admin0');
    foreach($ex as $list):
    ?>
    <div id ="item<?php echo $list['id']; ?>"class='card-ctn'>

        <h4 class='card-title'><?php echo trim($list['itemn']) ?></h4>
        <div class='card-imgc'>
            <img class='card-img' src=' <?php echo $list['url0']; ?> ' alt=''>
        </div>

    <div class='card-footer'>
        <span class='card-footerContainer' ><p class=''>$&nbsp</p><p class='card-footerText'> <?php echo $list['itemp']; ?></p></span>
        <button class='hbtn btn' href="title=<?php echo $list['itemn']; ?>&img=<?php echo $list['url0']; ?>&price=<?php echo $list['itemp']; ?>&id=<?php echo $list['id']; ?>" >Añadir al carrito</button>
    </div>
</div>
<?php
endforeach;
?>