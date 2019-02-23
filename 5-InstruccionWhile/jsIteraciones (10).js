function mostrar()
{

	var contador=0;
	//declarar contadores y variables
  var num

  var contpos=0
  var contneg=0
  var contcero=0
  var sumapos=0
  var sumaneg=0
  var respuesta="si";
var bandera=true

    while (bandera)
    bandera = false
      do {
        while (confirm())
        num=prompt("ingrese un numero");
        num=parseInt(num);
         }
        while (num<0){
          sumaneg = (num + sumaneg)

        }
        while (num>0){
          sumapos= (num + sumapos)

        }
      }

      alert(sumapos);
//FIN DE LA FUNCIÓN
