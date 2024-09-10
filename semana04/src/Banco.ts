import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';
import Titular from './Titular';

export default class Banco {
    private contas: ContaBancaria[] = [];

    public transferir() {
        var numeroContaOrigem = leia.question("INFORME O NUMERO DA SUA CONTA: ");
        var indexOrigem;
        for(var i = 0; i < this.contas.length; i++){
            if(this.contas[i].getNumero() === numeroContaOrigem){
                indexOrigem = i;
            }
        }

        if(indexOrigem === undefined){
            console.log("A CONTA QUE VOCÊ DIGITOU NÃO EXISTE...")
            return;
        }

        var numeroContaDestino = leia.question("INFORME O NUMERO CONTA DE DESTINO: ")
        var indexDestino = this.contas.findIndex(conta => conta.getNumero() === numeroContaDestino);
        if(indexDestino === -1){
            console.log("A CONTA DE DESTINO NÃO EXISTE...");
            return;
        }

        var valor = leia.questionFloat("INFORME O VALOR DA TRANSFERENCIA: ");
        if(valor > this.contas[indexOrigem].getSaldo()){
            console.log("VOCÊ NÃO TEM SALDO SUFICIENTE");
            return;
        }

        this.contas[indexOrigem].sacar(valor);
        this.contas[indexDestino].depositar(valor);
        console.log("TRANSFERENCIA FEITA COM SUCESSO!!!")
    }

    private save(conta: ContaBancaria){
        this.contas.push(conta);
        console.log(`Conta com número ${conta.getNumero()} foi criada com sucesso!`)
    }

    public mostrarContas() {
        console.table(this.contas);
    }

    public addAccount(){
        console.log("-------CRIANDO CONTA----------")
        var nome = leia.question("DIGITE SEU NOME: ")
        var cpf = leia.question("DIGITE SEU CPF: ")
        var chavePix = leia.question("DIGITE CHAVE PIX: ")
        var tipoConta = leia.keyInSelect(["CORRENTE", "POUPANCA"]) + 1;

        var titular = new Titular(nome, cpf);

        var conta: ContaBancaria;
        if(tipoConta === 1){
            conta = new ContaCorrente(titular, chavePix);
        }else {
            conta = new ContaPoupanca(titular, chavePix);
        }

        this.save(conta);
    }

    public removerConta(){
        console.log("---------DELETAR CONTA-----------")
        var numeroConta = leia.question("DIGITE O NUMERO DA CONTA PARA DELETAR: ")
        for(var i = 0; i < this.contas.length; i++){
            if(numeroConta === this.contas[i].getNumero()){
                this.contas.splice(i, 1);
                console.log(`CONTA COM NÚMERO ${numeroConta} EXCLUIDA COM SUCESSO`)
                return;
            }
        }
        
        console.log(`NÃO FOI ENCONTRADO NENHUMA CONTA COM O NÚMERO ${numeroConta}`);
    }

}