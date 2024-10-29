import Veiculo from './entity/Veiculo';
import './index.css';

const listaVeiculos:Veiculo[] = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", (event: MouseEvent) => {
    const teste = (window as any).bancoAPI.load();
    console.log(teste)

    // event.preventDefault();
   
    // var modelo = document.getElementById("modelo") as HTMLInputElement;
    // var cor = document.getElementById("cor") as HTMLInputElement
    // var ano = document.getElementById("ano") as HTMLInputElement
    // var preco = document.getElementById("preco") as HTMLInputElement
    // var placa = document.getElementById("placa") as HTMLInputElement
    // var imagem = document.getElementById("imagem") as HTMLInputElement

    // const novaVeiculo = new Veiculo(modelo.value, cor.value, Number(ano.value), Number(preco.value), placa.value, imagem.value);

    // listaVeiculos.push(novaVeiculo);
    // (window as any).bancoAPI.createVeiculo(novaVeiculo);

    // const lista_campos = ["modelo", "cor", "ano", "preco", "placa", "imagem"];
    // lista_campos.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");

    // var aside = document.getElementById("lista-veiculo");
    // aside.innerHTML = "";

    // for(var i = 0; i < listaVeiculos.length; i++){
    //     aside.innerHTML += `
    //         <div class="card">
    //             <img src="${listaVeiculos[i].getImagem()}" alt="ERRO">
    //             <div class="dados">
    //                 <strong>${listaVeiculos[i].getModelo()}</strong>
    //                 <span>Cor: ${listaVeiculos[i].getCor()}</span>
    //                 <span>Ano: ${listaVeiculos[i].getAno()}</span>  
    //                 <span>Preço: R$${listaVeiculos[i].getPreco()}</span>
    //                 <span>Placa: R${listaVeiculos[i].getPlaca()}</span>
    //             </div>
    //             <div class="botao-card">
    //                 <button id="botao-ver">VER</button>
    //                 <button id="botao-deletar">DELETAR</button>
    //             </div>
    //         </div>
    //     `;
    // }

})
    