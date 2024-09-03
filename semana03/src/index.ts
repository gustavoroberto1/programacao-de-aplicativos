import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import ContaCorrente from './ContaCorrente';

var nome = leia.question("DIGITE SEU NOME: ")
var cpf = leia.question("DIGITE SEU CPF: ")
var chavePix = leia.question("DIGITE CHAVE PIX: ")

var t1 = new Titular(nome, cpf);
var c1 = new ContaBancaria(t1, chavePix);
c1.getNumero();


var cc = new ContaCorrente(t1, chavePix);
cc.getLimite();
