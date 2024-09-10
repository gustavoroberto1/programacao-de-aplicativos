import leia from 'readline-sync'
import Banco from "./Banco";

var nubank = new Banco();

var opcao = 0;
do {
    console.log("------------MENU------------")
    opcao = leia.keyInSelect(["CRIAR CONTA", "TRANSFERENCIA", "REMOVER", "MOSTRAR"]) + 1;
    switch (opcao) {
        case 1:
            nubank.addAccount();
            break;
        case 2:
            nubank.transferir();
            break;
        case 3: 
            nubank.removerConta();
            break;
        case 4: 
            nubank.mostrarContas();
            break;
    }
} while (opcao !== 0);