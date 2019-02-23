function mostrar()
{

	var numero = prompt ("ingrese un numero entre 0 y 9");
	var contador=0

	if (0<numero&&numero<=9) {document.getElementById("Numero").value=numero}

	else

	{
			while (0>numero||numero>9 && contador<2) // 2 porque ya hay un prompt antes (asi hay 3 intentos)
			   {
					numero = prompt ("Ingrese un numero entre 0 y 9")

						if (0>numero||numero>9) {
													(contador ++)
												}

						if (0<numero&&numero<=9) {
													document.getElementById("Numero").value=numero
												 }

						if (contador>=2) {
											alert("Se alcanzo el numero maximo de intentos erroneos")
										 }

				}
	};






};
//FIN DE LA FUNCIÓN
