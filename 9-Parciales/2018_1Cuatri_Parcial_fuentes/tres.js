function mostrar()
{
var precio;
var descuento;
var aDescontar;
var precioFinal;


precio=prompt("Ingrese el precio a pagar");
precio= parseInt(precio)    
                        while(isNaN(precio)){
                            precio=prompt("Ingrese el precio a pagar (debe ser un numero)");
                            precio= parseInt(precio)   
                        };

descuento=prompt("Ingrese el descuento");
descuento= parseInt(descuento)    
                        while(isNaN(descuento)){
                         descuento=prompt("Ingrese el descuento (debe ser un numero)");
                         descuento= parseInt(descuento)   
                          };

aDescontar=( precio * descuento ) / 100;

precioFinal= precio - aDescontar ; 

document.getElementById("elPrecioFinal").value=precioFinal;
}
