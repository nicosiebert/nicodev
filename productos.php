<?php
    $items = @file_get_contents('carrito.json');
    $items = json_decode($items, true);

    foreach($items as $list):
    ?>
    <div id ="item<?php echo $list['id']; ?>"class='card-ctn'>

        <h4 class='card-title'><?php echo trim($list['title']) ?></h4>
        <div class='card-imgc'>
            <img class='card-img' src=' <?php echo $list['img']; ?> ' alt=''>
        </div>

    <div class='card-footer'>
        <span class='card-footerContainer' ><p class=''>$&nbsp</p><p class='card-footerText'> <?php echo $list['precio']; ?></p></span>
        <button class='hbtn btn' href="title=<?php echo $list['title']; ?>&img=<?php echo $list['img']; ?>&price=<?php echo $list['precio']; ?>&id=<?php echo $list['id']; ?>" >Añadir al carrito</button>
    </div>
</div>
<?php
endforeach;
?>
