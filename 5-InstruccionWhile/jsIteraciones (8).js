function mostrar()
{
var num=0;
var suma=0;
var multiplicacion=1;

while (confirm ("Agregar un numero?"))
{

    num=prompt("ingrese un numero")
    num=parseInt(num)

        while (isNaN(num)){
                            num=prompt("ese no era un numero , ingrese un numero")
                            num=parseInt(num)
                          } ;  
    if (num>=0)
    {
      (suma+=num)
    }              
    else
    {
    if(num<0)
    {
      (multiplicacion*=num)
    }
    }           

};

document.getElementById("suma").value=suma;
document.getElementById("producto").value=multiplicacion;


}
















//FIN DE LA FUNCIÓN
