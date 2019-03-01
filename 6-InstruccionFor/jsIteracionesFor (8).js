function mostrar()
{
    var numero
    var contador

numero=prompt("numero");

for (var i=1;i<=numero;i++){
    contador=0
    if (numero%i==0) {
        (contador ++);
        break
    } 
}
if (contador>=2) { alert("no es primo")}



//FIN DE LA FUNCIÓN

