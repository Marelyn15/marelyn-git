var campoFiltro = document.querySelector("#filtrar-tabla");
console.log(campoFiltro);

//Relacionar un evento
campoFiltro.addEventListener("input",function(){
//Escuchador de evento (addEventListener), escuchara al evento input mediante una funcion anonima
    console.log("Escribieron en el input");
    //Acceder al texto
    console.log(this.value);
    //Comparar con los pacientes
    var pacientes = document.querySelectorAll(".paciente");//Llamamos a todos los pacientes
    console.log(pacientes);
    //para que aparezcan nuevamente los nombres
    if(this.value.length>0){
         //Ayuda a iterar por pacientes
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNombre = paciente.querySelector(".info-nombre");
        var nombre = tdNombre.textContent;
        //Para busqueda con palabras en comun Regexp
        var expresion = new RegExp(this.value,"i");
        if(!expresion.test(nombre)){
            paciente.classList.add("invisible");
        } else {
            paciente.classList.remove("invisible");
            } 
        }
    }
    else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
    }
}
   
});

