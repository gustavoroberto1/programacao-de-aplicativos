var tarefas = [];

function adicionarTarefa() {
    const input = document.getElementById("tarefa-text");
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === '') {
        alert("VOCÊ TENTOU ADICIONAR UMA TAREFA SEM TEXTO");
        return;
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 1000000),
        text: tarefaTexto,
        completed: false
    }

    tarefas.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render()
    input.value = "";
    input.focus();
}

function render() {
    const listaTarefas = document.getElementById("lista-tarefa");
    listaTarefas.innerHTML = "";

    for (var i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li");
        if (tarefas[i].completed === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].text;

        const concluir = document.createElement("button");
        concluir.textContent = tarefas[i].completed ? "Desmarcar" : "Concluir";
        concluir.classList.add("check");
        concluir.setAttribute("onclick", `trocaConcluir(${tarefas[i].id})`);

        const edit = document.createElement("button");
        edit.textContent = "Editar";
        edit.classList.add("edit");
        edit.setAttribute("onclick", `editarTarefa(${tarefas[i].id})`)

        const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        deletar.classList.add("delete");
        deletar.setAttribute("onclick", `deletarTarefa(${tarefas[i].id})`)

        const div = document.createElement("div");

        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }
}

function trocaConcluir(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    const valorAtual = tarefas[index].completed;
    tarefas[index].completed = !valorAtual;
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
}

function editarTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    const novoTextoTarefa = prompt('Edite a tarefa', tarefas[index].text);

    if (novoTextoTarefa !== null && novoTextoTarefa.trim() !== '') {
        tarefas[index].text = novoTextoTarefa;
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        render();
    }
}

function deletarTarefa(id){
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
}

function addPeloEnter(evento){
    if(evento.key === 'Enter'){
        adicionarTarefa();
    }
}

function carregarTarefas() {
    const tarefasLocalStore = localStorage.getItem("tarefas");
    if(tarefasLocalStore){
        tarefas = JSON.parse(tarefasLocalStore);
        render();
    }
}