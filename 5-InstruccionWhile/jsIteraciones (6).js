function mostrar()
{

	var contador=0;
  var suma = 0
  var num

while( contador < 5)
{
  (contador ++);
  num = prompt("ingrese un numero");

  num=parseInt(num);
  while(isNaN(num)) {
                       num = prompt("ingrese un numero")
                       num=parseInt(num)
                       }

  suma=(suma + num);}


document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma / contador;

}//FIN DE LA FUNCIÓN
