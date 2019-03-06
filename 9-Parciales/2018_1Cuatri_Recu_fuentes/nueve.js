function mostrar() {

    /* Realizar el agoritmo que permita ingresar la marca de la marca de la gaseosa.La cantidad de litros 
    (validar litros entre 1 litro , 2 litros y 3 litros), el precio el cual debe ser entre 30 y 100 y 
    por document.write
    a)la cantidad de precios pares
    b) la marca y litros del mas barato 
    c)la cantidad de gaseosas que valen menos de 50
    d)el promedio del precio de todas las gaseosas 
    f)el precio maximo y el minimo de todas las gaseosas de menores de 3 litros;*/

    var marca;
    var litros;
    var precio;
    var respuesta = true
    var contadorPares = 0
    var promedio
    var precioMax = "No se ingreso ninguna gaseosa de menos de 3 L"
    var precioMin = "No se ingreso ninguna gaseosa de menos de 3 L"
    var contadorMenos50 = 0
    var marcaMasBarata
    var litrosMasBarata
    var precioMasBarata
    var sumaprecios = 0
    var contador = 0

    while (respuesta) {

        contador++;

        /* pido la marca */

        marca = prompt(" Ingrese la marca de la gaseosa ");
        while (!isNaN(marca)) {
            marca = prompt("Error, ingrese el nombre de la gaseosa");
        }

        /*pido los litros*/

        litros = prompt("Ingrese la cantidad de litros de la gaseosa (1, 2 o 3)")
        while (litros != "1" && litros != "2" && litros != "3") {
            litros = prompt("Error, Ingrese la catidad de litros. (1 , 2 o 3 )");
        }

        /*pido precio*/

        precio = prompt("ingrese el precio de la gaseosa")
        precio = parseInt(precio);
        while (isNaN(precio) || precio > 100 || precio < 30) {
            precio = prompt("Error , ingrese el precio de la gaseosa (entre 30 y 100)")
        };

        /*Pares*/

        if (precio % 2 == 0) {
            contadorPares++;
        };

        /*Marca y litros mas barato*/

        if (contador == 1) {
            marcaMasBarata = marca;
            litrosMasBarata = litros;
            precioMasBarata = precio;
        };

        if (precio < precioMasBarata) {
            marcaMasBarata = marca;
            litrosMasBarata = litros;
            precioMasBarata = precio;
        };

        /*menores a 50*/

        if (precio < 50) {
            contadorMenos50++;
        };

        /*promedio de las gaseosas*/

        sumaprecios += precio;


        /*mas barata menos de 3 litros */

        if ( precioMin == "No se ingreso ninguna gaseosa de menos de 3 L" && litros !=3 ) {
            precioMin = precio;
            precioMax = precio;
        };

        if (precio < precioMin && litros != 3) {
            precioMin = precio;
        };

        if (precio > precioMax && litros != 3) {
            precioMax = precio;
        };

        respuesta = confirm("Ingresar otra gaseosa?");

    }
    
    promedio = sumaprecios / contador;

    document.write("Precios pares = " + contadorPares + "<br>");
    document.write(" Marca y litros del mas barato " + marcaMasBarata + " " + litrosMasBarata + "<br>");
    document.write("Cantidad de gaseosas que valen menos de 50 " + contadorMenos50 + "<br>");
    document.write("Promedio del precio de todas las gaseosas " + promedio + "<br>");
    document.write("Precio maximo de las gaseosas de menos de 3L = " + precioMax + "<br>");
    document.write("Precio minimo de las gaseosas de menos de 3L = " + precioMin + "<br>");


}