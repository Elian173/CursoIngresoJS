function mostrar()
{
var precio
var amigos
var propina
var pagaCadaUno
var total
var iva

parseInt (precio);
parseInt (amigos);
parseInt (propina);
parseInt (pagaCadaUno);
parseInt (total);
parseInt(iva);

precio=1000;
amigos=5;


propina=precio*(0.1);
total = precio + propina;
iva=precio*(0.21)

pagaCadaUno= (total/amigos);


alert ("El precio es "+precio+" la propina es $"+propina+" en total seria $"+
total +"(sin contar el iva de $"+iva+") , y cada uno de los amigos deveria pagar $"+
pagaCadaUno);

}
