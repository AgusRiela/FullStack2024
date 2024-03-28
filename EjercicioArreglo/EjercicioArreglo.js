"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var N = readlineSync.questionInt("Ingrese la dimension del arreglo ");
var Arreglo = new Array(N);
var i = 0;
var contadorPositivos = 0;
var contadorNegativos = 0;
var contadorCeros = 0;
for (i = 0; i < N; i++) {
    Arreglo[i] = readlineSync.questionInt("ingrese el numero ");
}
for (i = 0; i < N; i++) {
    if (Arreglo[i] > 0) {
        contadorPositivos++;
    }
    if (Arreglo[i] < 0) {
        contadorNegativos++;
    }
    if (Arreglo[i] == 0) {
        contadorCeros++;
    }
}
console.log("La cantidad de numeros positivos es ", contadorPositivos);
console.log("La cantidad de numeros negativos es ", contadorNegativos);
console.log("La cantidad de numeros ceros es ", contadorCeros);
