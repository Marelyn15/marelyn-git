var botonBuscar = document.querySelector("#buscar-paciente");
//Relacionar con carga de pacientes
botonBuscar.addEventListener("click", function(){
    //Requisicion
    //API datos almacenados
    var xhr = new XMLHttpRequest;//Permite hacer las requisiciones
    //Llamamos el metodo que abre la requisicion
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    //Evento para la requision
    xhr.addEventListener("load", function(){
        //Manejo de errores
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
         errorAjax.classList.add("invisible");
        //Respuesta de requisicion
        var respuesta = xhr.responseText
        //Conversion string a Json
        var pacientes = JSON.parse(respuesta);
        //Iteracion de pacientes
        pacientes.forEach(function(paciente){
            //Llamar funcion
            adicionarPacienteEnLaTabla(paciente);
            console.log(paciente);
        });
        }
        else{
            errorAjax.classList.remove("invisible")
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
    });
    //Envio
    xhr.send();
});