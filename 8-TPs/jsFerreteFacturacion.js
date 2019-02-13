/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    var precioN1;
    var precioN2;
    var precioN3;
    var sumado;

    precioN1=document.getElementById("PrecioUno").value;
    precioN2=document.getElementById("PrecioDos").value;
    precioN3=document.getElementById("PrecioTres").value;

    precioN1=parseInt(precioN1);
    precioN2=parseInt(precioN2);
    precioN3=parseInt(precioN3);

    sumado= (precioN1)+(precioN2)+(precioN3);

    alert ("La suma de los 3 numeros es "+sumado);

}
function Promedio () 
{
    var promedio
    precioN1=document.getElementById("PrecioUno").value;
    precioN2=document.getElementById("PrecioDos").value;
    precioN3=document.getElementById("PrecioTres").value;

    precioN1=parseInt(precioN1);
    precioN2=parseInt(precioN2);
    precioN3=parseInt(precioN3);

    sumado=(precioN1)+(precioN2)+(precioN3);

    promedio=(sumado)/3;
    
    alert ("El promedio entre los 3 numeros es "+promedio);
}
function PrecioFinal () 
{
    var masiva
	precioN1=document.getElementById("PrecioUno").value;
    precioN2=document.getElementById("PrecioDos").value;
    precioN3=document.getElementById("PrecioTres").value;

    precioN1=parseInt(precioN1);
    precioN2=parseInt(precioN2);
    precioN3=parseInt(precioN3);

    sumado= (precioN1)+(precioN2)+(precioN3);
    
    iva=parseInt(21*sumado)/100


    alert (("El precio de los articulo(+IVA) es ")+(sumado+iva));

}