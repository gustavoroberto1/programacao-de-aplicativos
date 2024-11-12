import IVeiculo from 'src/types/IVeiculo';
import './index.css';

let listaVeiculos: IVeiculo[] = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();

    const modelo = document.getElementById("modelo") as HTMLInputElement;
    const cor = document.getElementById("cor") as HTMLInputElement
    const ano = document.getElementById("ano") as HTMLInputElement
    const preco = document.getElementById("preco") as HTMLInputElement
    const placa = document.getElementById("placa") as HTMLInputElement
    const imagem = document.getElementById("imagem") as HTMLInputElement

    const veiculo = {
      modelo: modelo.value,
      cor: cor.value,
      ano: Number(ano.value),
      preco: Number(preco.value),
      placa: placa.value,
      imagem: imagem.value
    } as IVeiculo


    listaVeiculos.push(veiculo);
    await (window as any).bancoVeiculoAPI.create(veiculo);

    const lista_campos = ["modelo", "cor", "ano", "preco", "placa", "imagem"];
    lista_campos.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");
    render();
})

window.onload = async () => {
    const veiculos = await (window as any).bancoVeiculoAPI.findAll();
    
    for (let i = 0; i < veiculos.length; i++) {
        const veiculo = { ...veiculos[i], preco: veiculos[i].valor }
        listaVeiculos.push(veiculo);
    }
    render();
}

 function render() {
     const aside = document.getElementById("lista-veiculo");
     aside.innerHTML = "";

     for (let i = 0; i < listaVeiculos.length; i++) {
         aside.innerHTML += `
             <div class="card">
                 <img src="${listaVeiculos[i].imagem}" alt="ERRO">
                 <div class="dados">
                     <strong>${listaVeiculos[i].modelo}</strong>
                     <span>Cor: ${listaVeiculos[i].cor}</span>
                     <span>Ano: ${listaVeiculos[i].ano}</span>  
                     <span>Preço: R$${listaVeiculos[i].preco}</span>
                     <span>Placa: R${listaVeiculos[i].placa}</span>
                 </div>
                 <div class="botao-card">
                     <button id="botao-ver" onclick="irPaginaDetalhes('${listaVeiculos[i].id}')">VER</button>
                     <button id="botao-deletar" onclick="deletarVeiculo('${listaVeiculos[i].id}')">DELETAR</button>
                 </div>
             </div>
         `;
     }
 }

function deletarVeiculo(id: string) {
    (window as any).bancoAPI.deletarVeiculo(id);
    listaVeiculos = listaVeiculos.filter(veiculo => veiculo.id !== id);
    render();
}

function irPaginaDetalhes(id: string){
    (window as any).navigateAPI.irPaginaDetalhes(id);
}

(window as any).deletarVeiculo = deletarVeiculo;
(window as any).irPaginaDetalhes = irPaginaDetalhes;