var paciente = document.querySelector("#primero");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var imc = peso/(altura * altura);
var tdImc = document.querySelector(".info-imc");

tdImc.textContent = imc;

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);
console.log(imc);