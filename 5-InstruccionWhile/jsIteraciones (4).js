function mostrar()
{

	var numero = prompt ("ingrese un numero entre 0 y 9")

while (numero)
			   {
					  
					if (0>numero||numero>9) {
												numero = prompt ("ingrese un numero entre 0 y 9") }

					else 					{ break; }


					document.getElementById("Numero").value= numero ;
}
}
//FIN DE LA FUNCIÓN