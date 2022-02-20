let exp = -1;
let base = parseInt(prompt("Vamos a calcular una potencia. Ingrese la base o 0 para salir"));
while (base != 0) {
    while (exp < 0) {
    exp = parseInt(prompt("Ingrese un exponente positivo."));
    }
    let aux = base;
    for (let i = 0; i < exp-1; i++) {
        aux = aux*base;
    }
    alert("El resultado es:  " + aux)
    base = parseInt(prompt("Vamos a calcular una potencia. Ingrese la base o 0 para salir"));
    exp= -1;
}
