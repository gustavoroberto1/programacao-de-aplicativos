import Veiculo from './entity/Veiculo';
import * as echarts from 'echarts';

import './index.css';

var listaVeiculos: Veiculo[] = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();


    var id = document.getElementById("combobox") as HTMLSelectElement
    var modelo = document.getElementById("modelo") as HTMLInputElement;
    var cor = document.getElementById("cor") as HTMLInputElement
    var ano = document.getElementById("ano") as HTMLInputElement
    var preco = document.getElementById("preco") as HTMLInputElement
    var placa = document.getElementById("placa") as HTMLInputElement
    var imagem = document.getElementById("imagem") as HTMLInputElement

    console.log(id.value)

    const novaVeiculo = new Veiculo(modelo.value, cor.value, Number(ano.value), Number(preco.value), placa.value, imagem.value);



    listaVeiculos.push(novaVeiculo);
    (window as any).bancoAPI.createVeiculo(novaVeiculo);

    const lista_campos = ["modelo", "cor", "ano", "preco", "placa", "imagem"];
    lista_campos.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "");

    render();
})

window.onload = async () => {
    const veiculos = await (window as any).bancoAPI.findAll();
    for (var i = 0; i < veiculos.length; i++) {
        const veiculo = new Veiculo(
            veiculos[i].modelo,
            veiculos[i].cor,
            veiculos[i].ano,
            veiculos[i].valor,
            veiculos[i].placa,
            veiculos[i].imagem,
            veiculos[i].id
        );

        listaVeiculos.push(veiculo);
    }
    // render();
    desenharGrafico();
    desenharGraficoLinha();
    desenharGraficoPizza();
    preencheComboBox()
}


function preencheComboBox() {
    var combobox = document.getElementById("combobox");
    combobox.innerHTML = `<option value="" disabled="true">Selecione uma opção</option>`;

    for (var i = 0; i < listaVeiculos.length; i++) {
        combobox.innerHTML += `
            <option value="${listaVeiculos[i].getId()}">${listaVeiculos[i].getModelo()}</option>
        `;
    }
}

function render() {
    var aside = document.getElementById("lista-veiculo");
    aside.innerHTML = "";

    for (var i = 0; i < listaVeiculos.length; i++) {
        aside.innerHTML += `
            <div class="card">
                <img src="${listaVeiculos[i].getImagem()}" alt="ERRO">
                <div class="dados">
                    <strong>${listaVeiculos[i].getModelo()}</strong>
                    <span>Cor: ${listaVeiculos[i].getCor()}</span>
                    <span>Ano: ${listaVeiculos[i].getAno()}</span>  
                    <span>Preço: R$${listaVeiculos[i].getPreco()}</span>
                    <span>Placa: R${listaVeiculos[i].getPlaca()}</span>
                </div>
                <div class="botao-card">
                    <button id="botao-ver" onclick="irPaginaDetalhes('${listaVeiculos[i].getId()}')">VER</button>
                    <button id="botao-deletar" onclick="deletarVeiculo('${listaVeiculos[i].getId()}')">DELETAR</button>
                </div>
            </div>
        `;
    }
}

function desenharGrafico(){
    const teste = document.getElementById("barra") as HTMLDivElement

    const chart = echarts.init(teste);
    const option = {
        xAxis: { 
            data: ['Semana 1', 'Semana 2', 'Semana 3 ', 'Semana 4'] 
        },
        yAxis: { 
            type: 'value' 
        },
        series: [{
            type: 'bar',
            data: [10, 20, 30, 40]
        }]
    };

    chart.setOption(option);
}

function desenharGraficoLinha(){
    const teste = document.getElementById("linha") as HTMLDivElement

    console.log(teste)
    const chart = echarts.init(teste);
    const option = {
        title: { text: "Vendas" },
        xAxis: { data: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'line',
            data: [10, 20, 30, 40, 200]
        }]
    };

    chart.setOption(option);
}

function desenharGraficoPizza() {
    const teste = document.getElementById("pizza") as HTMLDivElement;

    const chart = echarts.init(teste);
    const option = {
        title: { text: 'Distribuição de Vendas', subtext: '2024', x: 'center' },
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', data: ['Produto A', 'Produto B', 'Produto C', 'Produto D'] },
        series: [{
            name: 'Vendas',
            type: 'pie', // Tipo de gráfico de pizza
            radius: ['40%', '70%'], // Donut (com buraco no meio)
            avoidLabelOverlap: false,
            label: { show: false, position: 'center' },
            labelLine: { show: false },
            data: [
                { value: 335, name: 'Produto A' },
                { value: 234, name: 'Produto B' },
                { value: 154, name: 'Produto C' },
                { value: 335, name: 'Produto D' },
                { value: 100, name: 'Produto E' },
                { value: 2100, name: 'Produto F' },
            ]
        }]
    };

    chart.setOption(option);
}

function deletarVeiculo(id: string) {
    // CHAMA A FUNÇÃO DELETAR DO PRELOAD, NO CONTEXTO DE 'bancoAPI'
    (window as any).bancoAPI.deletarVeiculo(id);

    // FILTRA TODOS OS ITENS COM ID DIFERENTE DO ID QUE VEIO POR PARAMETRO
    listaVeiculos = listaVeiculos.filter(veiculo => veiculo.getId() !== id);
    render();
}

function irPaginaDetalhes(id: string){
    (window as any).navigateAPI.irPaginaDetalhes(id);
}

(window as any).deletarVeiculo = deletarVeiculo;
(window as any).irPaginaDetalhes = irPaginaDetalhes;