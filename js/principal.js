//formula para calcular imc de los pacientes
var pacientes = document.querySelectorAll(".paciente");//Todos los pacientes

for(var i = 0 ; 1<pacientes.length; i++){ //Para hacer funcion en todos los pacientes
     var  paciente = pacientes[i];//Para no cambiar nombres de acuerdo a los arreglos
    //datos
    var tdPeso = paciente.querySelector(".info-peso"); //Se toma del html
    var peso = tdPeso.textContent; //Se asigna valor
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    //Logica validacion
    pesoValido = validarPeso(peso);
    alturaValida = validarAltura(altura);
    
    if(!pesoValido){//Aca usamos la funcion negada.
        console.log("peso incorrercto");
        tdImc.textContent = "Peso incorrecto";
        pesoValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
 
    if(!alturaValida){
        console.log("Altura incorrercta");
        tdImc.textContent = "Altura incorrecta";
        alturaValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
    //Ambas verdaderas
    if(pesoValido && alturaValida){
        tdImc.textContent = calcularIMC(peso,altura);
    }
}

function calcularIMC(peso,altura){
        var imc = peso/(altura * altura);
        return imc.toFixed(2);//Para fijar decimales
    }

function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}
function validarAltura(altura){
    if(altura >= 0 && altura < 3.00 ){
        return true;
    }
    else{
        return false;
    }
}