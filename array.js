"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let disciplinas = ['ppi', 'PDS', 'SOR', 'ESPANHOL', 'BIOLOGIA'];
console.log(disciplinas.length);
disciplinas.push('Historia', 'Portugues');
console.log(disciplinas);
disciplinas.pop();
disciplinas.splice(2, 1);
const ultimoElemento = disciplinas.length - 1;
delete disciplinas[ultimoElemento];
console.log(disciplinas);
let estudante = [];
let carro = ['Mercedes', 987, 36888.99];
let carro2 = {
    "marca": "Mercedes",
    "ano": 1987,
    "preco": 36888.99
};
console.log("O preço do carro é:", carro[1]);
console.log(carro2.preco);
