class Pessoa {
  private nome: string;
  private cpf: string;

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }

  exibirDados(): void {
    console.log("Nome:", this.nome);
    console.log("CPF:", this.cpf);
  }
}