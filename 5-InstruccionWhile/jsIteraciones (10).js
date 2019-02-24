function mostrar()
{

  var num
  var contadorImpar=0;
  var contadorPar=0;
  var contadorP=0;
  var contadorN=0;
  var contadorC=0;
  var sumaN=0;
  var sumaP=0;
  var bandera=true;


if (bandera)
{ (bandera=false) ;

  while (confirm("ingresar numero")==true)
    {

    num = prompt("Ingrese su numerito");

    num=parseInt(num)
                      while (isNaN(num)) {
                        num=prompt("ese no era un numero , ingrese un NUMERO")
                        num=parseInt(num)
                      };
 if(num%2==0) { contadorPar++} else { contadorImpar++};

  if (num>0) 
{ 
    (contadorP ++);
    (sumaP+=num);
} else
{
  if (num<0)
{
    (contadorN ++);
    (sumaN+=num);
}
  else { (contadorC ++) }
}

    }

  };

  alert ("La suma de los positivos es "+sumaP+", la suma de los negativos es "+sumaN+" ,se ingresaron "+contadorP+
  " numeros positivos ,"+contadorN+" numeros negativos , y "+contadorC+ " ceros , se ingresaron "+contadorImpar+" numeros impares"+
  " y "+contadorPar+" numeros pares")


}
//FIN DE LA FUNCIÓN
