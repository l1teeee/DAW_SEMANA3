var aleatorios;
var min,max,cantidad;
function init(){
    //declaracion del arreglo o matriz de forma literal
    //que contendra los numeros aleatorios
    aleatorios=[];
    //declaracion y asignacion de los limites entre
    //los cuales estaran comprendidos los numeros aleatorios
    min=parseInt(prompt("Ingrese el limite inferior",""));
    max=parseInt(prompt("Ingrese el limite superior",""));
    cantidad=parseInt(prompt("Indique la cantidad de numeros aleatorios a generar",""));
    disparador=document.getElementById("generador");
    listado=document.getElementById("listanumeros");
    if(disparador.addEventListener){
        disparador.addEventListener('click',function(evt){
            aleatorio(min, max, cantidad);
            listado.innerHTML="Los numeros aleatorios son: "+aleatorios.toString();
        }, false);
        
    }else if(disparador.attachEvent){
        disparador.attachEvent('onclick', function(evt){
            aleatorio(min, max,cantidad);
            listado.innerHTML="los numeros aleatorios son: "+aleatorios.toString();

        });
    }
}
function aleatorio(minimo, maximo, cantidad){
    //generando un numero aleatorio teniendo el cuidado
    //que este comprendido entre los valores minimo y maximo
    var numero=Math.floor(Math.random()*(maximo-minimo+1))+minimo;
    //verificar que no se haya llegado a la cantidad
    //de numero aleatorios maximo establecido
    if (aleatorios.length<cantidad){
        //agregar el numero aleatorio al arreglo o matiz
        //utilizando el metodo push()
        aleatorios.push(numero);
        //invocar recursivamente a la funcion aleatorio
        aleatorio(minimo, maximo, cantidad);
    }
}
window.onload=init;