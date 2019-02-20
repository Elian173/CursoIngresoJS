function mostrar()
{
var planeta;

planeta= prompt ("Ingrese el nombre de un planeta del sistema solar");

switch (planeta){
    case "tierra": alert("aca vivimos");
    break;
    case "mercurio":
    case "venus" : alert ("acá hace más calor")
    break;
    case "marte":
    case "jupiter":
    case "urano":
    case "neptuno" :
    case "saturno" : alert("aca hace mas frio")
    break;
    default :alert("el planeta no existe")
}

}

