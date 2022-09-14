const inputTexto = document.querySelector(".input-texto");

const mensaje = document.querySelector(".mensaje");

function limpiar(){
    document.getElementById("sin-mensaje").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("muneco").style.display = "none";
    mensaje.style.fontSize = "32px";
    mensaje.style.color = "#0A3871";
    mensaje.style.textAlign = "left";
    mensaje.style.height = "624px";
    inputTexto.value = "";
}

function resetear(){
    document.getElementById("sin-mensaje").style.display = "none";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("muneco").style.display = "none";
    document.getElementsByClassName("mensaje")[0].placeholder="";
}

function alerta(){
    alert("Porfavor ingrese un texto");
}

function encriptar(stringEncriptado){
    
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnEncriptar(){
    if(inputTexto.value == ""){
        alerta();
    } else{
        const textoEncriptado = encriptar(inputTexto.value);
    limpiar();
    mensaje.value = textoEncriptado;
    }
}


function btnDesencriptar(){
    if(inputTexto.value == ""){
        alerta();
    } else{
        const textoDesencriptado = desencriptar(inputTexto.value);
    limpiar();
    mensaje.value = textoDesencriptado;
    }
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    resetear();
    mensaje.value = "";
    alert("Texto copiado");
    inputTexto.focus();
}

function btnCopiar(){
    copiar();
}