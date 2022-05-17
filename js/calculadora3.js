var cantidad = "";
var sumatoria = 0;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var porcentajer = false;
var cuadrado =false;
var contador=0;
var contador


function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
}

function resta() {
    if (contador==0){
        sumatoria= sumatoria +parseInt(cantidad);
    }else{
        sumatoria=document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
    contador++;
}

function multiplicacion() {
    if(contador == 0){
        sumatoria = sumatoria +
        parseInt(cantidad);
    }else{
        sumatoria =
        document.getElementByld("display")
    }
    contador++;

    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
}


function division() {
    if(contador == 0){
        sumatoria = sumatoria +
        parseInt(cantidad);
    }else{
        sumatoria =
        document.getElementByld("display"
        ).value;
    }
    contador++;
    
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    dividir = true;
}

function raizcuadrada(){
    raiz=Math.sqrt(cantidad);
    document.getElementById("display").value=raiz;
    cantidad="";
}

function porcentaje() {
    sumatoria = parseInt(cantidad) / (100);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    porcentajer = true;
}

function eliminar() {
    document.getElementById("display").value = "";
    cantidad = "";
}


function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    }
    if (multiplicar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (dividir) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (porcen) {
        document.getElementById("display").value = sumatoria % parseInt(cantidad);
    } 
}