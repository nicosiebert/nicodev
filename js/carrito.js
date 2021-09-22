gid('hc').onclick = function(){
    $('.carrito1').classList.toggle('visible')
    $('.carrito').classList.toggle('visible')
    $('.carritoF').classList.toggle('visible')
    $('.carrito').classList.toggle('carT')

}
$('.carritoF').onclick = async e =>{
    $('.carrito1').classList.remove('visible')
    $('.carrito').classList.remove('visible')
    $('.carritoF').classList.remove('visible')
    $('.carT').classList.remove('visible')
}
compra_end = $('.compra_end_padre')

const btn_add = $$('.hbtn'),
carrito_ctn = $('.carrito-productos')
let carrito = {}, producto
let titlet, pricet, cantidadt, imgt, template, 
carrito_fragment = document.createDocumentFragment()
let menos,
mas =$$('.mas')
let carrito_total_value = $('.carrito-total-value')

template=gid('template').content

$('.vaciar-carrito').addEventListener('click', e=> {
    carrito={}
    PintarCarrito(carrito)
    agregar(carrito)
})

//functions
document.addEventListener('DOMContentLoaded', async (e)=>{
    if(localStorage.getItem('carrito') ){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        PintarCarrito(carrito)
    }
    gid('realizar-compra').addEventListener('click',e=>{
        compra_end.classList.toggle('invisible')
        compra_end.classList.add('compra_end_scale')
    })
    compra_end.addEventListener('click', e=> {
        compra_end.classList.toggle('invisible')
        compra_end.classList.remove('compra_end_scale')
    })
})
// f que ocurre cuando se presionan los btn_add
function AgregarCarrito(e){
    ObtenerProducto(e.target.getAttribute('href'));
    guardarCarrito(producto)
    PintarCarrito(carrito)
      
}
function PintarCarrito(carrito){
    carrito_ctn.innerHTML = "";
        carrito_values=Object.values(carrito)
        carrito_values.forEach(el =>{
            titlet = $('.carrito-productos-h6', template)
            titlet.textContent = el.title

            imgt = $('.carrito-productos-img', template)
            imgt.setAttribute("src", el.img)
            pricet = $('.carrito-precio', template)
            pricet.textContent= el.precio * el.cantidad
            cantidadt = $('.carrito-cantidad', template)
            cantidadt.value = el.cantidad
            cantidadt.setAttribute('id', el.id)

            const template_clone = template.cloneNode(true)
            carrito_fragment.appendChild(template_clone)
            return
            
        })
        carrito_ctn.appendChild(carrito_fragment)
        menos_listener()
        mas_listener()
        input_listener()
        total_suma()
        vaciar_producto_listener()
        vaciar_carrito()
        
}



function restar_cantidad(e){
    let menos_ctn = e.target.parentElement,
    input_cantidad = $('.carrito-cantidad', menos_ctn)
    let id = input_cantidad.getAttribute('id')
    if(carrito.hasOwnProperty(id)){
        carrito[id].cantidad--
        
        agregar(carrito)
        PintarCarrito(carrito)
        cantidad_cero(carrito[id].cantidad, id)
    }
    
}
function sumar_cantidad(e){
    let mas_ctn = e.target.parentElement,
    input_cantidad = $('.carrito-cantidad', mas_ctn)
    let id = input_cantidad.getAttribute('id')
    if(carrito.hasOwnProperty(id)){
        carrito[id].cantidad++
        
        agregar(carrito)
        PintarCarrito(carrito)
        cantidad_cero(carrito[id].cantidad, id)
    }
}
function input_cantidad(e){
    let value = e.target.value,
    id = e.target.getAttribute('id')
    if(carrito.hasOwnProperty(id)){
        carrito[id].cantidad = value
        agregar(carrito)
        PintarCarrito(carrito)
        cantidad_cero(carrito[id].cantidad, id)

    }
}
function cantidad_cero(cantidad, id){
    if(cantidad < 1){
        delete carrito[id]
        PintarCarrito(carrito)
    }
}
function total_suma(){
    let total_cantidad = 0
    for(var prod in carrito){
        total_cantidad+=carrito[prod].cantidad*carrito[prod].precio   
    }
    carrito_total_value.innerHTML= `Total: $${total_cantidad}`

}
function guardarCarrito(producto){
    if(carrito.hasOwnProperty(producto.id)){
        carrito[producto.id].cantidad++
        agregar(carrito)
        return carrito[producto.id].cantidad
    }
    else{
        carrito[producto.id]={...producto}
        agregar(carrito)
        return
    }
}
function agregar(carrito){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
function vaciar_carrito(){
    if(Object.values(carrito).length < 1){
        $('.vaciar-carrito').style ="visibility:hidden;"
        $('.carrito-productos').innerHTML = "<div class='carrito-vacio'>carrito vacio :(</div>"
        $('.carrito-productos').style = "height:20px"
    }else{
        
        $('.vaciar-carrito').style ="visibility:visible;"
        $('.carrito-productos').style = "height:auto"
    }
}
const ObtenerProducto= async Qurl =>{
    //separar la url con los datos del carrito
    Qurl = Qurl.split("&")
    let title = Qurl[0].split("=")[1],
        img = Qurl[1].split("=")[1],
        precio = Qurl[2].split("=")[1],
        id = Qurl[3].split("=")[1]
    //guardamos el producto en un objeto, el cual pasaremos al carrito
        return producto ={"id": id, "title":title, "precio":precio, "img":img, "cantidad": 1}
        
}
//agregar eventos a los botones add
btn_add.forEach( btn =>{
    btn.addEventListener('click', AgregarCarrito)
})
/* listener para botones*/
function menos_listener(){
    menos=$$('.menos')
    menos.forEach(restar => {
            restar.addEventListener('click', restar_cantidad)
        });
}
function mas_listener(){
    mas=$$('.mas')
    mas.forEach(sumar => {
            sumar.addEventListener('click', sumar_cantidad)
        });
}
function input_listener(){
    let cantidad_input =$$('.carrito-cantidad')
    cantidad_input.forEach(cambio => {
            cambio.addEventListener('input', input_cantidad)
        });
}
function vaciar_producto_listener(){
    let borrar = $$('.borrar')
    borrar.forEach(el => {
        el.addEventListener('click',e=>{
            let menos_ctn = e.target.parentElement,
    input_cantidad = $('.carrito-cantidad', menos_ctn)
    let id = input_cantidad.getAttribute('id')
    if(carrito.hasOwnProperty(id)){
        carrito[id].cantidad = 0
        
        agregar(carrito)
        PintarCarrito(carrito)
        cantidad_cero(carrito[id].cantidad, id)
    }
        })
    });

}

