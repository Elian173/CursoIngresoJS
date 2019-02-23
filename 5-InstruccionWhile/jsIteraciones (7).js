function mostrar()
{
  var num
  var suma=0;
  var PreguntaUno
  var PreguntaDos
  var contador = 0 ;
  PreguntaUno=confirm("Ingresar un numero")

if (PreguntaUno==true){
                  PreguntaDos=true;

while (PreguntaDos==true)
{
  (contador ++)
  num = prompt("ingrese un numero");
  num=parseInt(num);
  while(isNaN(num)) {
                       num = prompt("ingrese un numero")
                       num=parseInt(num)
                       //suma = (suma + num)
                       };
  suma= (suma + num);
  PreguntaDos=confirm("sumar otro numero?")}
}

document.getElementById("suma").value=suma;

document.getElementById("promedio").value=suma/contador;
}

//FIN DE LA FUNCIÓN
