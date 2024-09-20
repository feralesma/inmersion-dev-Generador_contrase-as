// var cantidad = 8     ===> var está en desuso
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena')
let botonL = document.getElementById('limpiar')
let mensaje = document.getElementById("aviso");


const cadenaCaracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

/*
console.log(typeof cantidad);
console.log(typeof boton);
console.log(typeof contraseña);
*/

//Funciones: se nombran con un verbo
function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    // Condicionales
    if (isNaN(numeroDigitado)) {
        alert("Debes introducir un número de caracteres para la contraseña!!");
        return;
    }
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor o igual a 8!!");
        return;
    }

    let password = '';
    for(let i=0; i < numeroDigitado; i++){
        /*
        let x= Math.random()
        console.log(x)
        let long= cadenaCaracteres.length
        console.log(long)
        let posCar= x * long
        console.log(posCar)
        posCar= Math.floor(posCar)
        console.log(posCar)
        */
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio)

        password +=caracterAleatorio;
    }

    validar(password)
    //console.log('password generada: '+ password);
    contraseña.value= password;

}

function limpiar() {

    contraseña.value = '';
    cantidad.value = '';
    mensaje.textContent = '';

}

function validar(password) {

    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        mensaje.textContent = "La contraseña es fuerte!!";
        mensaje.style.color = "green";
        mensaje.style.fontSize = "20px";
        //return true;
    } else {
        mensaje.textContent = "CONTRASEÑA DÉBIL!!  Debe incluir mayúsculas, minúsculas, números y caracteres especiales.";
        mensaje.style.color = "red";
        mensaje.style.fontSize = "20px";
        //return false;
    }

}

// 20240920 19:35
