function mostrar()

{

  var bandera 
   var suma 
    var contador
     var num

  contador=0;
  bandera==true ;
  num=0;
  suma=0;


 while (confirm("Sumar un numero?")==true)
    {
      (contador ++) ;

      num=prompt ("Sumar este numero");

      num=parseInt(num);
          while (isNaN(num)) {
                              num = prompt("ese no era un numero , pls pone un numero ")
                              num=parseInt(num)}
      (suma+=num)
    };

document.getElementById("suma").value=suma
document.getElementById("promedio").value=suma/contador
}



//FIN DE LA FUNCIÓN
