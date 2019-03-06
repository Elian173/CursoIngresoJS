function mostrar() {
    var marca; var peso; var temperatura; var respuesta = true


    while (respuesta) {

        // pido la marca

        marca = prompt("Ingrese la marca de su producto");
        while (!isNaN(marca)) {
            marca = prompt("Error , ingrese la marca de su producto");
        }

        //pido el peso

        peso = prompt("Ingrese el peso del producto (entre 1 y 100 kg)")
        peso = parseInt(peso)


        while (isNaN(peso) || peso > 100 || peso < 1) {
            peso = prompt("Error, ingrese el peso del producto ( entre 1 y 100 kg)");
            peso = parseInt(peso);
        }
        // pido temperatura

        temperatura = prompt("Ingrese la temperatura de almacenamiento del profucto (entre -30° y 30°");
        temperatura = parseInt(temperatura)

        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = prompt("Error . Ingrese la temperatura de almacenamiento del profucto (entre -30° y 30°")
            parseInt(temperatura);
        }


        //A) temperatura par
        if(temperatura%2==0){

        }


        respuesta = confirm("ingresar otro producto?")
    }

}
