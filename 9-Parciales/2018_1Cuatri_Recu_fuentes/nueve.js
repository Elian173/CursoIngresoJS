function mostrar()
{
    
    //valido pais MAL porque devuelve true o false//
    
    pais = prompt("ingrese un pais");

        while (pais=!isNaN(pais))
    {
    pais = prompt(" error , ingrese el pais")
    };
    

    //valido pais y devuelve lo que escribi//


    paisBien = prompt("Ingrese el nombre del pais") ;

    while ( !isNaN (paisBien) )
    {
        paisBien = prompt("Error.Porfavor ingrese el nombre del pais");
    };


alert(pais) ;
alert(paisBien);


    };
    
    
    
