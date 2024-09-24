function pegarInformacoes(evento) {
    evento.preventDefault();

    var nome = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    validaCampo(nome) 
    validaCampo(email) 
    validaCampo(message); 

    var comentario = `
        <div class="comentario-item">
            <span>${nome.value} - <strong>${email.value}</strong></span>
            <p>${message.value}</p>
        </div>
    `;

    document.getElementById("comentarios").innerHTML += comentario;

    nome.value = "";
    email.value = "";
    message.value = "";
    document.getElementById("enviar").disabled = true;

}

function validaCampo(elemento){
    if (elemento.value === "") {
        elemento.style.borderColor = "red";
    }
}

function capturarTecla(evento) {
    if (evento.key === 'Enter') {
        pegarInformacoes(evento);
    }
}

function verificarDisabled() {
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(nome !== "" && email !== "" && message !== ""){
        document.getElementById("enviar").disabled = false;
    }else {
        document.getElementById("enviar").disabled = true;
    }
}