"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    exibirDados() {
        console.log("Nome:", this.nome);
        console.log("CPF:", this.cpf);
    }
}
