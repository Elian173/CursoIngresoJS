function mostrar() {
    var precio
    var amigos
    var propina
    var pagaCadaUno
    var total
    var iva

    precio = prompt("Cuanto hay que pagar");
    amigos = prompt("Cuantos amigos son ");
    propina = precio * (0.1);
    iva = (precio) * (0.21);

    parseInt(amigos);
    parseInt(iva);

    total = parseInt(precio) + parseInt(propina);

    pagaCadaUno = ((total + iva) / amigos);
    parseInt(pagaCadaUno);


    alert("El precio es " + precio + " la propina es $" + propina + " en total seria $" +
        total + "(sin contar el iva de $" + iva + ") , y cada uno de los amigos deberia pagar $" +
        pagaCadaUno);

}
