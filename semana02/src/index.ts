import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

var nome = leia.question("DIGITE SEU NOME: ")
var cpf = leia.question("DIGITE SEU CPF: ")
var chavePix = leia.question("DIGITE CHAVE PIX: ")

var t1 = new Titular(nome, cpf);
var c1 = new ContaBancaria(t1, chavePix);
c1.consultarSaldo();
c1.depositar(100);
c1.sacar(40.676897);
c1.mostrarDadosConta();
