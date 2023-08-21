console.log("Ejecutando js")
const nombre = document.getElementById("inombre")
const apellido = document.getElementById("iapellido")

const correo = document.getElementById("icorreo")
const pass = document.getElementById("icontra")
const telefono = document.getElementById("itel")

const form = document.getElementById("id-form")
const parrafo = document.getElementById("warning")

var ojo=document.getElementById("ojo");
var input=document.getElementById("icontra")

ojo.addEventListener("click", function(){
    if(input.type=="password"){
        input.type=="text"
        ojo.style.opacity=0.8
    }else{
        input.type="password"
        ojo.style.opacity=0.2
    }
})

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexPass=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,12}$/
    parrafo.innerHTML = ""
    if(nombre.value.length <2){
        warning += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length<2){
        warning += `El apellido no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(correo.value)){
        warning += `El email no es valido <br>`
        entrar = true
    }
    if(!regexPass.test(pass.value)){
        warning += `La contraseña no es valida <br>`
        entrar = true
    }
    if(telefono.value.length!=8){
        warning+='El telefono no es valido'
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

