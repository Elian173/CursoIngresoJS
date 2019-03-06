/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
    var edad;
    var sexo;
    var eCivil;
    var sueldo;
    var legajo;
    var nacionalidad;
    var bandera = true;

    if (bandera) {
        while (bandera) {

            ///////////

            edad = prompt("ingrese edad");
            edad = parseInt(edad);

            while (isNaN(edad) || edad > 90 || edad < 18) {
                edad = prompt("La edad solo puede ser un numero entre 18 y 90 años!")
                edad = parseInt(edad)
            };

            ///////////

            sexo = prompt("ingrese sexo, “M” para masculino y “F” para femenino");
            while (sexo != "M" && sexo != "F") {
                sexo = prompt("ingrese sexo, “M” para masculino y “F” para femenino!");
            };

            ///////////

            eCivil = prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
            while (eCivil != 1 && eCivil != 2 && eCivil != 3 && eCivil != 4) {
                eCivil = prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos!");
            };

            ///////////

            sueldo = prompt("Ingrese Sueldo bruto, no menor a 8000.");
            sueldo = parseInt(sueldo);
            while (sueldo < 8000 || isNaN(sueldo)) {
                sueldo = prompt("Ingrese Sueldo bruto, no menor a 8000.");
            };
            //////////

            legajo = prompt("Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
            legajo = parseInt(legajo);
            while (legajo <= 999 || legajo > 9999 || isNaN(legajo)) {
                legajo = prompt("Número de legajo, numérico de 4 cifras, sin ceros a la izquierda!!");
            };
            //////////
            nacionalidad = prompt("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")
            while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {
                nacionalidad = prompt("Ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados!");
            };
            break;
        }
    }

    if (nacionalidad == "A") { nacionalidad = "Argentino " } else {
        if (nacionalidad == "E") { nacionalidad = "Extranjero" } else {
            nacionalidad = "Nacionalizado"
        }
    };

    if (sexo == "M") { sexo = "Masculino" } else { sexo = "Femenino " };

    if (eCivil == 1) { eCivil = "Soltero " } else {
        if (eCivil == 2) { eCivil = "Casado " } else {
            if (eCivil == 3) { eCivil = "Divorciado " } else {
                eCivil = "Viudo"
            }
        }
    }

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = eCivil;
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = legajo;
    document.getElementById("Nacionalidad").value = nacionalidad;

}
