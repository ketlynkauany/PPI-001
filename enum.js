"use strict";
//Cursando, Aprovado(a), Avaliação Final, Reprovado
Object.defineProperty(exports, "__esModule", { value: true });
//Situação de um estudante em uma disciplina
var Situação;
(function (Situação) {
    Situação["CURSANDO"] = "Cursando";
    Situação["APROVADO"] = "Aprovado(a)";
    Situação["AVFINAL"] = "Avalia\u00E7\u00E3o Final";
    Situação["REPROVADO"] = "Reprovado(a)";
})(Situação || (Situação = {}));
let situacao = Situação.APROVADO;
let ketlyn = {
    nome: 'Ketlyn Kauany Ferrira dos Santos',
    matricula: 20231144010081,
    etapa1: undefined,
    etapa2: undefined,
    etapa3: undefined,
    etapa4: undefined,
    mediaParcial: undefined,
    curso: 'INFO',
    situacao: Situação.CURSANDO
};
console.log(ketlyn);
