function mostrar() {

    /* realizar un algoritmo que permita iterar el uso de datos , un pais , y
    la superficie de su territorio (validar) hasta que el usuario quiera e informar
    el ingreso por document.write.
    averiguar  = la cantidad de paises con superficie impar , 
    la cantidad de paises con superficie menor , mayor o igual a 100 
    - el nombre del primer pais cuya superficie fue mayor a 100
    -el promedio de kilometros ingresados 
    -el nombre del que menos territorio tiene*/


    var pais; var superficie; var paisConMenorSuperficie; var superficieMasChica;

    var primeroConCienBandera = true; var nombrePrimeroConCien; var sumaDeSuperficies = 0

    var contadorImpar = 0; var contadorMenoresACien = 0; i = 0;

    var contadorMayoresACien = 0; var contadorIgualACien = 0; var respuesta = true


    while (respuesta) {
        i++;
        /*Pregunto el pais*/

        pais = prompt("Ingrese el nombre del pais");

        while (!isNaN(pais)) {
            pais = prompt("Error.Porfavor ingrese el nombre del pais");
        };

        /* Pregunto la superficie*/

        superficie = prompt("Ingrese la superficie de ese pais");

        superficie = parseInt(superficie);

        while (isNaN(superficie) || superficie < 0) {
            superficie = prompt("Error.Porfavor ingrese la superficie de ese pais");
            parseInt(superficie);
        };

        /*esto se ejecuta solo la primera vez*/
        /*igualo la superficie mas chica a la primer superficie ingresada y guardo el pais al que pertenece*/
        if (i == 1) {
            superficieMasChica = superficie
            paisConMenorSuperficie = pais
        };
        ///
        /*esto se ejecuta siempre*/

        /*averiguo si la superfice es menor a la anterior y la asigno a la mas chica , y su correspondiente pais*/

        if (superficie < superficieMasChica) {
            superficieMasChica = superficie;
            paisConMenorSuperficie = pais;
        };

        /*Cuento los paises mayores menores o iguales a 100*/

        if (superficie > 100) { contadorMayoresACien++ }
        else {
            if (superficie == 100) { contadorIgualACien++ }
            else {
                if (superficie < 100) { contadorMenoresACien++ }
            }
        };

        /*veo si es  impar */

        if (superficie % 2 != 0) {
            contadorImpar++;
        };

        /*averiguo el primero con superficie mayor a 100*/

        if (primeroConCienBandera && superficie > 100) {
            nombrePrimeroConCien = pais;
            primeroConCienBandera = false
        };

        //sumo las superficies para el  promedio  de los kilometros ingresados //

        sumaDeSuperficies += superficie;

        // pregunta para cerrar el while

        respuesta = confirm("¿Agregar otro pais?");

    };

    document.write("Cantidad de paises con superficie impar = " + contadorImpar);
    document.write("Cantidad de paises con superficie menor a 100= " + contadorMenoresACien);
    document.write("Cantidad de paises con superficie iguales a 100= " + contadorIgualACien);
    document.write("Cantidad de paises con superficie mayor a 100= " + contadorMayoresACien);
    document.write("Nombre del pais con menor superficie = " + paisConMenorSuperficie + " (su superficie = " + superficieMasChica + ")");
    document.write("El primer pais ingresado con superficie mayor a 100= " + nombrePrimeroConCien);
    document.write("El promedio de todos los kilometros de los paises ingresados= " + sumaDeSuperficies / i);



};


/*
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
*/
