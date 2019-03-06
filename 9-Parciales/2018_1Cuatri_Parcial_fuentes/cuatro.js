function mostrar() {
    var numUno;
    var numDos;
    var numUnoPars;
    var numDosPars;
    var resta;
    var suma;

    numUno = prompt("Ingrese el primer numero");
    parseInt(numUno)
    while (isNaN(numUno)) {
        numUno = prompt("Ingrese el primer numero!");
        parseInt(numUno);
    };
    numDos = prompt("Ingrese el segundo numero");
    parseInt(numDos)
    while (isNaN(numDos)) {
        numDos = prompt("Ingrese el segundo numero!");
        parseInt(numDos);
    };

    numUnoPars = parseInt(numUno);
    numDosPars = parseInt(numDos);

    suma = numUnoPars + numDosPars;
    resta = numUnoPars - numDosPars;

    if (numUno == numDos) { alert(numUno + numDos) }
    else {
        if (numUno > numDos) { alert(resta) }
        else {
            if (numUno < numDos && suma > 10) { alert("La suma es " + suma + " y es mayor a 10") }
            else {
                if (numUno < numDos) { alert(suma) }
            }
        }
    };


}