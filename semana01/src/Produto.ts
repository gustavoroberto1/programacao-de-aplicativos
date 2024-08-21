export type Categoria = {
    nome: string;
    descricao: string;
}

export type Produto = {
    nome: string;
    preco: number;
    codigo: string;
    marca: string;
    categoria: Categoria
}