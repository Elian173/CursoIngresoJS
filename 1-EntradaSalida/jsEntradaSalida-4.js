/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{	var Nombre;
	Nombre=prompt ("cual es tu nombre");
	document.getElementById("elNombre").value=Nombre;

}

