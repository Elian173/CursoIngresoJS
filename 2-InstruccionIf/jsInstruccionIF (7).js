function mostrar()
{
//tomo la edad  
var edad
var estado

edad = document.getElementById("edad").value;
estado = document.getElementById("estadoCivil").value;

parseInt(edad)



if (edad<18&&estado=="Casado"||estado=="Divorciado")
{
    alert("Es muy pequeño para NO ser soltero ahre")
}
	


//FIN DE LA FUNCIÓN
}