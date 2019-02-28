function mostrar()
{
    var numero
    var cont=0
numero=prompt("numero");

for (var i=2;i<=numero/2;i++)

    if (numero%i==0) {
        cont++;
        break
    } 

}

if (cont>=2) { alert("no es primo ")}
//FIN DE LA FUNCIÓN