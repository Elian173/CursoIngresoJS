function mostrar()
{

var sexo = prompt("ingrese f ó m .")

while (sexo!="m"&&sexo!="f")
                                  {
                                      sexo = prompt("ingrese f ó m .")
                                  };

if (sexo=="m") {document.getElementById('Sexo').value= "Masculino"} else {

if(sexo=="f"){document.getElementById('Sexo').value= "Femenino"}
}
}
//FIN DE LA FUNCIÓN
