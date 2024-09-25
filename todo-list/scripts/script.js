var tarefas = [];

function adicionarTarefa(){
    const input = document.getElementById("tarefa-text");
    const tarefaTexto = input.value.trim();

    if(tarefaTexto === ''){
        alert("VOCÊ TENTOU ADICIONAR UMA TAREFA SEM TEXTO");
        return;
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 1000000),
        text: tarefaTexto,
        completed: false
    }

    tarefas.push(novaTarefa);
    render()
    input.value = "";
    input.focus();
}

function render() {
    const listaTarefas = document.getElementById("lista-tarefa");
    listaTarefas.innerHTML = "";

    for(var i = 0; i < tarefas.length; i++){
        const li = document.createElement("li");
        if(tarefas[i].completed === true){
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].text;

        const concluir = document.createElement("button");
        concluir.textContent = tarefas[i].completed ? "Desmarcar" : "Concluir";
        concluir.classList.add("check");

        const edit = document.createElement("button");
        edit.textContent = "Editar";
        edit.classList.add("edit");

        const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        concluir.classList.add("delete");

        const div = document.createElement("div");

        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }
}