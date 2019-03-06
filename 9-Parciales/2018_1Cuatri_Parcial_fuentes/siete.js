function mostrar() {
    var nota
    var sexo
    var contadorM = 0
    var contador = 0
    var notaBaja = 10
    var sumaDeNotas = 0
    var sexoNotaBaja = 0

    while (contador < 5) {

        contador++;
        ///////////
        nota = prompt("Ingrese la nota del alumno ");
        nota = parseInt(nota)
        while (isNaN(nota) || nota > 10 || nota < 1) {
            nota = prompt("error , ingrese la nota del alumno")
            nota = parseInt(nota)
        };
        ////////////
        sexo = prompt(" ingrese sexo del alumno (m) o (f)")

        while (sexo != "m" && sexo != "f") {
            sexo = prompt(" error , ingrese sexo del alumno (m) o (f)")
        }
        ////////////
        if (nota <= notaBaja && sexo == "m") { notaBaja = nota; sexoNotaBaja = "Masculino" } else {

            if (nota <= notaBaja && sexo == "f") { notaBaja = nota; sexoNotaBaja = "Femenino" }

        };
        ////////////
        sumaDeNotas = sumaDeNotas + nota;
        ////////////
        if (nota > 6 && sexo == "m") { contadorM++ };

    };


    alert("El promedio de las notas totales es de " + sumaDeNotas / 5 + ". La nota mas baja fue " + notaBaja +
        " El sexo de la persona con la nota mas baja era " + sexoNotaBaja + " y la cantidad de varones con notas mayores a 6 fue de " + contadorM);


}