function mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

while (sexo) { 
                if (sexo == "m"|| sexo =="f") { break }
                     else { prompt("ingrese f ó m .") }
}

document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN