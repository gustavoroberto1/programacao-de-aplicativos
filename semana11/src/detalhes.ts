document.getElementById("botao-voltar").addEventListener("click", () => {
    (window as any).navigateAPI.irPaginaHome();
})


window.onload = () => {
    const id = new URLSearchParams(window.location.search).get("id");
}
