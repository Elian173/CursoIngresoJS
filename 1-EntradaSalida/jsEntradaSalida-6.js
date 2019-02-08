/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var nDos;
    var Sumado;
    var nUno;

    nUno=document.getElementById("numeroUno").value;

    nDos=document.getElementById("numeroDos").value;

    Sumado=parseInt(nUno)+parseInt(nDos);
    
    alert (Sumado);
    

}

