/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var nDos;
    var Sumado;
    var nUno;

    nUno=document.getElementById("numeroUno").value;

    nDos=document.getElementById("numeroDos").value;

    Sumado=parseInt(nUno)-parseInt(nDos);
    
    alert (Sumado);
}

function multiplicar()
{ 
	var nDos;
    var Sumado;
    var nUno;

    nUno=document.getElementById("numeroUno").value;

    nDos=document.getElementById("numeroDos").value;

    Sumado=parseInt(nUno)*parseInt(nDos);
    
    alert (Sumado);
}

function dividir()
{
	var nDos;
    var Sumado;
    var nUno;

    nUno=document.getElementById("numeroUno").value;

    nDos=document.getElementById("numeroDos").value;

    Sumado=parseInt(nUno)/parseInt(nDos);
    
    alert (Sumado);
}

