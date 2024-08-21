import leia from 'readline-sync';
import { Categoria, Produto } from './Produto';

var nomeCategoria = leia.question("INFORME O NOME DA CATEGORIA: ")
var descCategoria = leia.question("INFORME O DESCRICAO DA CATEGORIA: ")
const categoria: Categoria = {
    nome: nomeCategoria,
    descricao: descCategoria
}

console.log("--------CATEGORIA CADASTRADA---------")

var nomeProduto = leia.question("INFORME O NOME DO PRODUTO: ")
var preco = leia.questionFloat("INFORME O PREÇO DO PRODUTO: ")
var codigo = leia.question("INFORME O CÓDIGO DO PRODUTO: ")
var marca = leia.question("INFORME O MARCA DO PRODUTO: ")

const produto: Produto = {
    nome: nomeProduto,
    preco: preco,
    codigo: codigo,
    marca: marca,
    categoria: categoria
}

console.log(produto);