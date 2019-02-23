function mostrar()
{
  // declarar variables
  var num
  var max
  var min
  var bandera

  bandera==true;

  while(confirm("Continuar?"))
	{
    num=prompt("ingrese un numero");

    num=parseInt(num);

    if (bandera == true) {

    bandera=false
    max=num
    min=num

    } else {
            if (num>max ) { max==num } else {
            if (num<min)  { min==num } }
           }
  }

 alert(max);
 // document.getElementById("maximo").value=max;
 // document.getElementById("minimo").value=min;


SIN TERMINAR ////// HACER EL 12 DE LOS TP

}//FIN DE LA FUNCIÓN
