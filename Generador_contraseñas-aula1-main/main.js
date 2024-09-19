// var cantidad = 8     ===> var está en desuso
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena')

const cadenaCaracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

/*
console.log(typeof cantidad);
console.log(typeof boton);
console.log(typeof contraseña);
*/

//Funciones: se nombran con un verbo
function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    //console.log(numeroDigitado);

    // Condicionales
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor o igual a 8!!");
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

    //console.log('password generada: '+ password);
    contraseña.value= password;

}







