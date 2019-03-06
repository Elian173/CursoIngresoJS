function mostrar() {

    var marca;
    var peso;
    var temperatura;
    var respuesta = true
    /*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
    la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
    a) La cantidad de temperaturas pares. 
    b) La marca del producto más pesado 
    c) La cantidad de productos que se conservan a menos de 0 grados. 
    d) El promedio del peso de todos los productos.	
    f) El peso máximo y el mínimo.*/

    var contadorPar = 0
    var contador = 0
    var marcaDelMasPesado
    var contadorMenosDe0Grados = 0
    var sumaPesos = 0
    var pesoMax
    var pesoMin
    var promedio;

    while (respuesta) {

        contador++;

        // pido la marca

        marca = prompt("Ingrese la marca de su producto");
        while (!isNaN(marca)) {
            marca = prompt("Error , ingrese la marca de su producto");
        }

        //pido el peso

        peso = prompt("Ingrese el peso del producto (entre 1 y 100 kg)")
        peso = parseInt(peso);

        while (isNaN(peso) || peso > 100 || peso < 1) {
            peso = prompt("Error, ingrese el peso del producto ( entre 1 y 100 kg)");
            peso = parseInt(peso);
        };

        // pido temperatura

        temperatura = prompt("Ingrese la temperatura de almacenamiento del profucto (entre -30° y 30°");
        temperatura = parseInt(temperatura)

        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = prompt("Error . Ingrese la temperatura de almacenamiento del producto (entre -30° y 30°");
            parseInt(temperatura);
        };

        //A) temperatura par
        if (temperatura % 2 == 0) {
            contadorPar++
        };

        //B y F) La marca del producto más pesado

        if (contador == 1 /*o bandera*/) {
            pesoMax = peso;
            marcaDelMasPesado = marca
            pesoMin = peso;
        };
        if (pesoMax < peso) {
            pesoMax = peso;
            marcaDelMasPesado = marca
        };
        if (peso < pesoMin) {
            pesoMin = peso;
        };

        //c) La cantidad de productos que se conservan a menos de 0 grados. 
        if (temperatura < 0) {
            contadorMenosDe0Grados++;
        };
        //d) El promedio del peso de todos los productos.
        sumaPesos += peso;

        respuesta = confirm("ingresar otro producto?");
    };

    promedio = sumaPesos / contador;

    document.write("la cantidad de temperaturas pares es " + contadorPar + "<br>");
    document.write("la marca del producto mas pesado es " + marcaDelMasPesado + "<br>");
    document.write("la cantidad de productos que se conservan a menos de 0 grados es " + contadorMenosDe0Grados + "<br>");
    document.write("el promedio del peso de todos los productos es " + promedio + "<br>");
    document.write("el peso maximo fue " + pesoMax + "<br>");
    document.write("el peso minimo fue " + pesoMin + "<br>");



}
