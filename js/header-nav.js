const menu = gid('menu')
const nav = gid('nav')
const navFondo = gid('nav-fondo')



//funciones
menu.onclick = function(e){
    nav.classList.toggle('invisible')
    nav.classList.toggle('tl')
    navFondo.classList.toggle('invisible')
    $('.carrito1').classList.remove('visible')
    $('.carrito').classList.remove('visible')
    $('.carritoF').classList.remove('visible')
    $('.carrito').classList.remove('carT')

}
navFondo.onclick = function(e){
    nav.classList.toggle('invisible')
    nav.classList.toggle('tl')
    navFondo.classList.toggle('invisible')
}