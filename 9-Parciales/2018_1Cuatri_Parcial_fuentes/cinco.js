function mostrar()
{
    var planeta;

planeta=prompt("Ingrese un planeta");
    switch (planeta) { 
        case "tierra":alert("Aca vivimos");
        break;
        case "venus":
        case "mercurio":alert("Aca hace mas calor");
        break;
        case "jupiter":
        case "saturno":
        case "marte":alert("aca hace mas frio")
        break;
        default:alert("ese no es un planeta")
    }
}

