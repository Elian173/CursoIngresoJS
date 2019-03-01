function mostrar()
{

    var numero
    var letra
    var cantPares=0
    var cantImpares=0
    var cantCeros=0
    var SumaPositivos=0
    var SumaNegativos=0
    var letraMax
    var numMax
    var numMin
    var letraMin
    var respuesta=true
    var bandera
while ( respuesta ) {

    letra = prompt("Ingrese una letra") ; 
    parseInt(letra);
                                        while (letra=!isNaN(letra)) {
                                            letra = prompt("Ingrese una letra!!!");
                                            parseInt(letra);
                                        };

/*---------------------------------------*/
    numero=prompt("ingrese un numero menor que 100 y mayor que -100");
    numero=parseInt(numero);            
                                        while(isnan(numero)||(numero>100||numero<-100)){
                                        numero = prompt("ingrese un numero menor que 100 y mayor que -100!!!");
                                        parseInt(numero);
                                    };
/*---------------------------------------*/
if (bandera){
    bandera=false;
    numMax=numero ; numMin = numero ;
}

    respuesta =confirm("ingresar otra combinacion?");
    
    
}


  }