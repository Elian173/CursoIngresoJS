/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var sueldoBr;
    var descuento;
    var total;
       
        sueldoBr= document.getElementById("importe").value;
    
        descuento= (parseInt(sueldoBr))*0.25;
    
        total=parseInt (sueldoBr)-(descuento);
    
        document.getElementById("resultado").value=(total);
        
	
}
