function mostrar() {
    /*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta 
    que el usuario quiera e informar al terminar el ingreso por document.write: 
    a) La cantidad de números pares. 
    b) La cantidad de números impares. 
    c) La cantidad de ceros. 
    d) El promedio de todos los números positivos ingresados. 
    e) La suma de todos los números negativos. 
    f) El número y la letra del máximo y el mínimo.*/

    var numero
    var letra
    var cantPares = 0
    var cantImpares = 0
    var cantCeros = 0
    var SumaPositivos = 0
    var SumaNegativos = 0
    var letraMax
    var numMax
    var numMin
    var letraMin
    var respuesta = true
    var bandera =true
    var contador = 0

    while (respuesta) {

        contador++;

        letra = prompt("Ingrese una letra");
        while (!isNaN(letra)) {
            letra = prompt("Ingrese una letra!!!");
        };

        /*---------------------------------------*/

        numero = prompt("ingrese un numero menor que 100 y mayor que -100");
        numero = parseInt(numero);
        while (isNaN(numero) || (numero > 100 || numero < -100)) {
            numero = prompt("ingrese un numero menor que 100 y mayor que -100!!!");
            parseInt(numero);
        };
        /*---------------------------------------*/
        if (bandera) {
            bandera = false;
            numMax = numero;
            numMin = numero;
            letraMax = letra;
            letraMin = letra;
        };

        if (numero > numMax) {
            numMax = numero;
            letraMax = letra;
        };

        if (numero < numMin) {
            numMin = numero;
            letraMin = letra;
        };
        /*---------------------------------------*/

        if (numero == 0) {
            (cantCeros++)
            (cantPares++)
        } else {

            if ((numero % 2) == 0) {
                (cantPares++)
            } else {

                if ((numero % 2) != 0) {
                    (cantImpares++)
                }
            }
        };

        /*---------------------------------------*/

        if (numero > 0) {
            SumaPositivos += numero
        } else {
            if (numero < 0) {
                SumaNegativos += numero
            }
        };
        /*---------------------------------------*/


        respuesta = confirm("ingresar otra combinacion?");

    }

    promedio = SumaPositivos / contador;

    alert("La cantidad de números pares. " + cantPares + "\n" +
        "La cantidad de numeros impares " + cantImpares + "\n" +
        "La cantidad de ceros " + cantCeros + "\n" +
        "El promedio de todos los números positivos ingresados " + promedio + "\n" +
        "La suma de todos los números negativos." + SumaNegativos + "\n" +
        "El numero y la letra del maximo " + numMax + " " + letraMax + ". \n" +
        "El numero y la letra del minimo " + numMin + " " + letraMin + " . \n ");


}