function mostrar()
{


    var dia

    dia= prompt("que dia de la semana es");
    
    parseInt(dia);

    switch (dia){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes": alert("a trabajar");
        break
        case "sabado":
        case "domingo": alert ( "buen finde" )
        break;
        default : alert ( "invalido ");
        break;
    }
}
