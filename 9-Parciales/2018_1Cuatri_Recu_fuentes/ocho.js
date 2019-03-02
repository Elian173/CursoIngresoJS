function mostrar()
{
    var territorio
    var pais
    var contador=0
    var sumaDeTerritorios = 0
    var bandera=true
    var pregunta = true
    var contadorCien=0
    var contadorMasCien=0
    var contadorMenosCien=0
    var contadorImpar=0
    var territorioMasChico
    var paisMasChico
    var primeroConCien

    while (pregunta)

 {
contador++;
//Pido territorio//
territorio = prompt ("Ingrese la superficie del territorio") ;

territorio=parseInt(territorio) ;

    while(isNaN(territorio)||territorio<0)
    {
        territorio=prompt("error , ingrese superficie de territorio");
        territorio=parseInt(territorio);
    };

//pido pais//

pais= prompt(" Ingrese un pais");

    while (pais=!isNaN(pais))
{
pais = prompt(" error , ingrese el pais")
}

//territorios mayores iguales y menores a 100 y 1ro con 100//
if (bandera&&territorio>100) 
{
    primeroConCien=pais

}

if (territorio=100) 
    {
    contadorCien++
    } 
    else{
             if (territorio>100) 
             {
                 contadorMasCien++
             }
              else{

              if (territorio<100) 
                 {                    
                  contadorMenosCien++
                 }
             }      
        }       
//par o impar//
if ((territorio%2)=!0)
{
    contadorImpar ++
}
//territorio mas chico//
if (bandera) { 
    territorioMasChico=territorio;
    bandera=false;
             };
if(territorio<territorioMasChico)
{
    territorioMasChico=territorio
}
//sumo las superficies///
sumaDeTerritorios+=territorio;
////////////

};

alert("Hay "+contadorImpar+" paises con superficie impar.\n Hay "+contadorMenosCien+" paises con superficie menor a 100km."+
"\nHay "+contadorCien+" paises con una superficie igual a 100km.\n Hay "+contadorMasCien+" paises con una supeficie mayo a 100"+
"\n El promedio de las superficies de los paises es " + sumaDeTerritorios/contador + " . \n El pais con menor superficie es "+paisMasChico);

};


