import { Celular } from "./CelularRepository";

export type Pessoa = {
    nome: string;
    cpf: string;
    dataNascimento: string;
    contatos: {
        telefones: string[],
        emails: string[] 
    },
    celular: Celular
}