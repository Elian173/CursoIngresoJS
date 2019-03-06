function mostrar() {
    var velocidad
    var combustible
    var contadorLiquido = 0
    var contador = 0
    var velocidadMasBaja = 250
    var sumaDeVelocidades = 0
    var combustibleVelBaja = 0
    var velocidadMasAlta = 0

    while (contador < 5) {

        contador++;
        //Pido velocidad//
        velocidad = prompt("Ingrese la velocidad del vehiculo (entre 0 y 250)");
        velocidad = parseInt(velocidad);

        while (isNaN(velocidad) || velocidad > 250 || velocidad < 0) {
            velocidad = prompt("error , ingrese la velocidad del vehiculo (entre 0 y 250)")
            velocidad = parseInt(velocidad)
        };
        //pido tipo de combustible//
        combustible = prompt(" Ingrese el tipo de combustible (l) para Liquido o (s) para Solido");

        while (combustible != "l" && combustible != "s") {
            combustible = prompt(" error , ingrese el tipo de combustible (s) o (l)")
        };
        //velocidad mas alta con combustible solido//

        if (velocidad > velocidadMasAlta && combustible == "s") {
            velocidadMasAlta = velocidad
        };

        //velocidades de combustibles liquidos superiores a 100//

        if (velocidad > 100 && combustible == "l") {
            contadorLiquido++;
        }

        //velocidad mas baja//

        if (combustible == "s" && velocidad <= velocidadMasBaja) {
            velocidadMasBaja = velocidad;
            combustibleVelBaja = "Solido"
        }
        else {
            if (combustible == "l" && velocidad <= velocidadMasBaja) {
                velocidadMasBaja = velocidad;
                combustibleVelBaja = "Liquido"
            }
        }


        ///promedio//acumulador : contador///

        sumaDeVelocidades += velocidad;

        ////////////

    };



    alert("El promedio de las velocidades totales es de " + sumaDeVelocidades / 5 + " km/h. La velocidad mas baja fue " + velocidadMasBaja +
        " km/h . El combustible del vehiculo con la velocidad mas baja era " + combustibleVelBaja + " y la cantidad de vehiculos con " +
        "combustible liquido y velocidad superior a 100 km/h es de " + contadorLiquido + " vehiculo/s.");


};






