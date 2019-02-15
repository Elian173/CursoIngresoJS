function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var randonum = Math.round(Math.random()*10);
	parseInt(randonum)

	if (randonum <=10 && randonum >= 9){
										alert ("Tu nota es un "+ randonum + ", Excelente ");}

	if (randonum <9 && randonum >= 4){
										alert ("Tu nota es un "+ randonum + ", Aprobó ");}

	if (randonum <4){
										alert ("Tu nota es un "+ randonum + ", Vamos, la proxima se puede ");}


}//FIN DE LA FUNCIÓN