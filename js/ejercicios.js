//Calcular año bisiesto
let anio = 0;

anio = parseInt(prompt("Ingrese el año para saber si es bisiesto.\n" +  "Ingrese -1 para salir"));

while (anio != -1) {
    if (calcularBisiesto(anio))
        alert(anio + " es año bisiesto")
    else
        alert(anio + " no es año bisiesto");
    anio = parseInt(prompt("Ingrese el año para saber si es bisiesto.\n" +  "Ingrese -1 para salir"));
}


function calcularBisiesto(numeroAnio) {
    let bisiesto = false;
    if (numeroAnio % 4 == 0) {
        if (numeroAnio % 100 != 0 || numeroAnio % 400 == 0) {
            bisiesto = true;
        }
    }
    return bisiesto;
}