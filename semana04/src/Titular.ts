export default class Titular {
    constructor(nome: string, cpf: string){
        this.nome = nome;
        this.cpf = cpf;
    }

    private nome: string;
    private cpf: string;

    
    public getNome(): string {
        return this.nome
    }
    
    public getCpf(): string {
        return this.cpf;
    }
}