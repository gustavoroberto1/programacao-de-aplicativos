import Dono from "./Dono";

export default class Cachorro{
    constructor(nome: string, raca: string, cor: string, tamanho: string, dono: Dono){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho;
        this.dono = dono;
    }

    nome: string;
    raca: string;
    cor: string;
    tamanho: string;
    dono: Dono;

    exibirCachorro() {
        console.log(`O cachorro ${this.nome} é da raça ${this.raca} e da cor ${this.cor}`);
    }

    exibirDono() {
        console.log(`O dono do ${this.nome} é ${this.dono.nome}`)
    }
}
