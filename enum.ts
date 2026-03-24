//Cursando, Aprovado(a), Avaliação Final, Reprovado

//Situação de um estudante em uma disciplina
 enum Situação {
    CURSANDO = "Cursando",
    APROVADO = "Aprovado(a)",
    AVFINAL = "Avaliação Final",
    REPROVADO = "Reprovado(a)"
 }

 let situacao = Situação.APROVADO

 type Curso = 'INFO' | 'meca' | 'subredes' | 'submeca'

 interface Estudadente  {
    nome: string
    matricula: number
    etapa1: number | undefined
    etapa2: number | undefined
    etapa3: number | undefined
    etapa4: number | undefined
    mediaParcial: number | undefined
    curso: Curso
    situacao: Situação
 }

 let ketlyn: Estudadente = {
    nome: 'Ketlyn Kauany Ferrira dos Santos',
    matricula: 20231144010081,
    etapa1: undefined,
    etapa2: undefined,
    etapa3: undefined,
    etapa4: undefined,
    mediaParcial: undefined,
    curso: 'INFO',
    situacao: Situação.CURSANDO

 }

 console.log(ketlyn)