function mostrar()
{

	//var positivo=0;
  //var negativo=1;
  var num
  var numN =1
  var numP =0
  var suma=0;
  var multiplicacion=0
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
                    };

        if (num>0)  {num=numP ,

        suma=numP+numP };

        if (num<0){num=numN ,
          multiplicacion = (numN*numN)};





        PreguntaDos=confirm("agregar otro numero?");}}
document.getElementById("suma").value=suma;

document.getElementById("producto").value=multiplicacion
}
//FIN DE LA FUNCIÓN
