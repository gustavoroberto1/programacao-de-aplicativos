import "./index.css"
document.getElementById("botao-voltar").addEventListener("click", () => {
    (window as any).navigateAPI.irPaginaHome();
})

window.onload = async () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const veiculo = await (window as any).bancoAPI.findById(id)
    console.log(veiculo)

    var aside = document.getElementById("veiculo");
    aside.innerHTML = "";

    aside.innerHTML += `
        <div class="card">
            <img src="${veiculo.imagem}" alt="ERRO">
            <div class="dados">
                <strong>${veiculo.modelo}</strong>
                <span>Cor: ${veiculo.cor}</span>
                <span>Ano: ${veiculo.ano}</span>  
                <span>Preço: R$${veiculo.valor}</span>
                <span>Placa: ${veiculo.placa}</span>
            </div>
        </div>
    `;
}
