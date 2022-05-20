//queremos ejecutar un evento para eliminar los pacientes.
//Para las tablas
var tablas = document.querySelector("#tabla-pacientes");
tablas.addEventListener("dblclick", function(event){//Ahora se pueden seleccionar los nuevos pacientes
    console.log(event.target);
    //Animacion
    event.target.parentNode.classList.add("fadeOut");//Creacion de clase
    //Funcion de tiempo dentroo de funcion anonima 
    setTimeout(function(){
    //Ejecutor del evento, para no usar this y eliminar todas las tablas
    event.target.parentNode.remove();//ParentNode para quitar todo
    //Eliminaremos donde se esta haciendo el clik
    },500);//Segundo parametro en milisegundos, lo dejamos en medio segund
});
