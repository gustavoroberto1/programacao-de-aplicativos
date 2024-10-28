/* eslint-disable no-var */
import { Carro } from './entity/Carro';
import './index.css';

var listaVeiculos:Carro[] = [];

// document.getElementById("botao-cadastrar2")?.addEventListener("click", (event: MouseEvent) => {
//     event.preventDefault();
//     var modelo = (document.getElementById("modelo") as HTMLInputElement).value
//     var cor = (document.getElementById("cor") as HTMLInputElement).value
//     var ano = (document.getElementById("ano") as HTMLInputElement).value
//     var preco = (document.getElementById("preco") as HTMLInputElement).value
//     var placa = (document.getElementById("placa") as HTMLInputElement).value
//     var imagem = (document.getElementById("imagem") as HTMLInputElement).value

//     const novaCarro = new Carro(modelo, cor, Number(ano), Number(preco), placa, imagem);

//     listaVeiculos.push(novaCarro);
//     (window as any).electronAPI.invokeDatabase(novaCarro);

//     const lista_campos = ["modelo", "cor", "ano", "preco", "placa", "imagem"];
//     lista_campos.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");

//     var aside = document.getElementById("lista-veiculo");
//     aside.innerHTML = "";

//     for(var i = 0; i < listaVeiculos.length; i++){
//         aside.innerHTML += `
//             <div class="card">
//                 <img src="${listaVeiculos[i].getImage()}" alt="ERRO">
//                 <div class="dados">
//                     <strong>${listaVeiculos[i].getModelo()}</strong>
//                     <span>Cor: ${listaVeiculos[i].getCor()}</span>
//                     <span>Ano: ${listaVeiculos[i].getAno()}</span>  
//                     <span>Preço: R$${listaVeiculos[i].getPreco()}</span>
//                     <span>Placa: R${listaVeiculos[i].getPlaca()}</span>
//                 </div>
//                 <div class="botao-card">
//                     <button id="botao-ver">VER</button>
//                     <button id="botao-deletar">DELETAR</button>
//                 </div>
//             </div>
//         `;
//     }

// })
document.getElementById('botao-cadastrar').addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    (window as any).electronAPI.test("second");
});