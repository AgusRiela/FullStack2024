import { Console } from 'console';
import * as readlineSync from 'readline-sync';

let N:number=readlineSync.questionInt("Ingrese la dimension del arreglo ")
let Arreglo:number[]=new Array (N)
let i:number=0;
let contadorPositivos:number=0;
let contadorNegativos:number=0
let contadorCeros:number=0;
for (i=0;i<N;i++){
    Arreglo[i]=readlineSync.questionInt("ingrese el numero ")
}
for (i=0;i<N;i++){
    if(Arreglo[i]>0){
        contadorPositivos++;
    }
    if (Arreglo[i]<0){
        contadorNegativos++;
    }
    if (Arreglo[i]==0){
        contadorCeros++;
    }
}
console.log("La cantidad de numeros positivos es ",contadorPositivos)
console.log("La cantidad de numeros negativos es ",contadorNegativos)
console.log("La cantidad de numeros ceros es ",contadorCeros);