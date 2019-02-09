/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var nDivisor;
    var nDividendo;
    var componentes;
    var restante;

    nDivisor=document.getElementById("numeroDivisor").value;

    nDividendo=document.getElementById("numeroDividendo").value;

    componentes=(parseInt(nDividendo)%parseInt(nDivisor));
    

    alert (componentes);
}
