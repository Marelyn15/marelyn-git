//Evento de bontonadicionar en el formulario
var botonAdicionar = document.querySelector("#adicionar-paciente");

    botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();//para que no se carguen los datos de textos.\
    var form = document.querySelector("#adicionar");
    //Captura de datos para 
    var paciente = capturaDatosPacientes(form);//Objeto
    
    //Validacion de pacientes
    //Validador
    var errores = validarPaciente(paciente);
    //Logica general 
    if(errores.length > 0){//Si erro tiene caracter entonces hay un error.
        exhibirMensajesErrores(errores);
        console.log(errores);
        return;
    }
    //funcion para adicionar
    adicionarPacienteEnLaTabla(paciente);
    //Mejora reseteo
    form.reset();
    //Reseteo de errores
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
});
//Funcion para encapsular lo de adicionar
function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    //tabla
    var tabla = document.querySelector("#tabla-pacientes");
    //Adicionar paciente a la tabla
    tabla.appendChild(pacienteTr);
}


function capturaDatosPacientes(form){
    //Captura de datos
    //Clase
    var paciente = { 
        //Atributos
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente){
    //Creacion de elementos
    var pacienteTr = document.createElement("tr");
    //Nueva clase:
    pacienteTr.classList.add("paciente");//permite clase en nuevo registro
    //AppendChild para pacientes y variables
    pacienteTr.appendChild(contruirTd(paciente.nombre,"#info-nombre"));
    pacienteTr.appendChild(contruirTd(paciente.peso,"#info-peso"));
    pacienteTr.appendChild( contruirTd(paciente.altura,"#info-altura"));
    pacienteTr.appendChild(contruirTd(paciente.gordura,"#info-gordura"));
    pacienteTr.appendChild(contruirTd(paciente.imc,"#info-imc"));
    //Las variables se introducen dentro, ya se declaran ahi mismo

    return pacienteTr;
}
//funcion para agregar clase a los objetos
function contruirTd(dato,clase){
    var td = document.createElement("td"); 
    td.classList.add(clase);
    td.textContent = dato;
    return td
}
//Para validar
function validarPaciente(paciente){
    var errores = [];//Los valores incorrectos se agregan aca
    //Vacio
    if(paciente.nombre.length == 0){
        errores.push("El nombre esta vacio");
    }
    //Peso vacio
    if(paciente.peso.length == 0){
        errores.push("El peso esta vacio");
    }//altura vacia
    if(paciente.altura.length == 0){
        errores.push("La altura esta vacia");
    }
    //gordura vacia
    if(paciente.gordura.length == 0){
        errores.push("El %gordura esta vacio");
    }

    //Peso
    if(!validarPeso(paciente.peso)){
        errores.push("Peso incorrecto");
    }
    //Altura
    if(!validarAltura(paciente.altura)){
        errores.push("Altura incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    //Reset
    ul.innerHTML = "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);  
    });
    //Se planea que esta funcion atrape mas errores
    //y evitar de este modo el uso del spam y hacer
    //un desastre en el codigo
}