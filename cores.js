"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cores = ['Azul', 'Verde', 'Roxo', 'Preto'];
//1
//console.log("Todas as cores que temos:")
//for (let i = 0; i < cores.length; i++) {
//console.log(cores[i]);
//}
//2
//cores.splice(2, 1);
//console.log(cores);
//3
let corBuscada = "Roxo";
let encontrado = false;
for (let i = 0; i < cores.length; i++) {
    if (cores[i] === corBuscada) {
        console.log("Encontrado na posição:", i);
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    console.log("Cor não encontrada");
}
