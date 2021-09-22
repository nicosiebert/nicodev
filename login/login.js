gid = e =>{
    return document.getElementById(e)
}
var btn = document.getElementById('btn-sub')
var form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(gid('email').value <= 3  || gid('pass').value <=5){
        alert('complete los campos')
    }
    else{
        const param = new FormData(form)

            fetch('login.php',{
                method:'post',
                    body:param
            })
        .then(res => res.json())
        .then(data =>{
             if(data == 200){
                gid("res").innerHTML = "<h1 class='green'>has iniciado sesion </h1>"
            }
            else if(data == 404){
                gid("res").innerHTML = "<h1 class='red'> no has iniciado sesion </h1>"
            }else{
                gid("res").innerHTML = "<h1 class='red'> error </h1>"
            }
        })
    }
})