function mostrar()
{
  var num;
  var max;
  var min;
  var bandera;

  bandera=true;

  while (confirm("ingresar numero")==true)
  {

    num = prompt("Ingrese su numerito jeje");

    num=parseInt(num)
                      while (isNaN(num)) {
                        num=prompt("ese no era un numero , ingrese un numero pls")
                        num=parseInt(num)
                      };
  if (bandera) 
  {
    (bandera=false);
    (max=num);
    (min=num);

  } else {

    if (num>max)  { (max=num) }

    else {

    if (num<min) { (min=num) }

    else {(max=max);(min=min)}
  }
  }
}
document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;
}

//FIN DE LA FUNCIÓN
