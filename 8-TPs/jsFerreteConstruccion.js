/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var ancho;
    var largo;
    var radio;
    var perimetro;

    ancho = document.getElementById("Ancho").value;
    largo = document.getElementById("Largo").value;

    parseInt(ancho)
    parseInt(largo)

    perimetro = (ancho) * 2 + (largo) * 2;

    alambres1 = perimetro / 3;

    alert("EL perimetro de este terreno es " + (perimetro) + " metros , y se necesitan 3 alambres de " + alambres1 + " metros cada 1");
}
function Circulo() {
    var diametro
    var alambres2
    var perimetroCirc

    radio = document.getElementById("Radio").value;

    parseInt(radio);

    diametro = radio * 2;

    perimetroCirc = (diametro * 3.14);

    alambres2 = perimetroCirc / 3;

    alert("Se necesitan 3 alambres de " + alambres2 + " metros c/u");


}
function Materiales() {
    var superficie
    var cemento
    var cal

    ancho = document.getElementById("Ancho").value;
    largo = document.getElementById("Largo").value;

    parseInt(ancho);
    parseInt(largo);

    superficie = (ancho) * (largo);

    parseInt(superficie)

    cemento = superficie / 2;
    cal = superficie / 3;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal , para cubrir la superficie de " + superficie + " metros cuadrados");



}