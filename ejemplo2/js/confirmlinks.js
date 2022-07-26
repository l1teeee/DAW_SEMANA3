//iniciando el manejdor para los enlaces de la pagina
window.onload=confirmAlllinks;

//controlador de eventos para elementos de enlace y area en mapas
//utiliza la palabra clave this para hacer referencia al elemento
//el navegador vaya al vinculo

function confirmLink(){
    return confirm("¿Está seguro que quiere visitar el sitio: " + this.href
    + "?");
}//recorrer todos los enlaces hipervinculos del documento 
//y asignar la funcion confirmLink a cada uno como controlador controlador de evento.
function confirmAllLinks(){
    for(var i=0; i<document.links.length; i++){
    document.links[i].onclick = confirmLink;
    }
}