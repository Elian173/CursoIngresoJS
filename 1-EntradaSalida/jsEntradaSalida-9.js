/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldoBr;
var aumento;
var total;
   
    sueldoBr= document.getElementById("sueldo").value;

    aumento= (parseInt(sueldoBr))*0.10;

    total=parseInt (sueldoBr)+(aumento);

    document.getElementById("resultado").value=(total);
    

    

}
