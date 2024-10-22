import './reset.css';
import './index.css';
import Tarefa from './Tarefa';
import Swal from 'sweetalert2';

var tarefas: Tarefa[] = [];

function addPeloEnter(evento: KeyboardEvent){
    if(evento.key === 'Enter'){
       adicionarTarefa();
    }
}

function adicionarTarefa() {
    const input = document.getElementById("tarefa-text") as HTMLInputElement;
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não pode adicionar uma tarefa vazia!",
        });
        return;
    }

    const novaTarefa = new Tarefa(tarefaTexto);

    tarefas.push(novaTarefa);

    console.log(tarefas)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render()
    input.value = "";
    input.focus();
}

function render() {
    const listaTarefas = document.getElementById("lista-tarefa") as HTMLUListElement;
    listaTarefas.innerHTML = "";

    for (var i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li");
        if (tarefas[i].getCompleted() === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].getText();

        const concluir = document.createElement("button");
        concluir.textContent = tarefas[i].getCompleted() ? "Desmarcar" : "Concluir";
        concluir.classList.add("check");
        concluir.setAttribute("onclick", `trocaConcluir(${tarefas[i].getId()})`);

        const edit = document.createElement("button");
        edit.textContent = "Editar";
        edit.classList.add("edit");
        // edit.onclick = () => editarTarefa(tarefas[i].getId());
        edit.setAttribute("onclick", `editarTarefa(${tarefas[i].getId()})`)

        const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        deletar.classList.add("delete");
        deletar.setAttribute("onclick", `deletarTarefa(${tarefas[i].getId()})`)

        const div = document.createElement("div");

        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }
}

function trocaConcluir(id: number){
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
    const valorAtual = tarefas[index].getCompleted();
    tarefas[index].setCompleted(!valorAtual);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    render();
}

async function editarTarefa(id: number){
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
    
    const { value } = await Swal.fire({
        title: "Editar tarefa!",
        input: "text",
        inputLabel: "Edite o texto da tarefa",
        inputValue: tarefas[index].getText(),
        icon: 'question'
    });

    if(value !== undefined && value.trim() !== ''){
        tarefas[index].setText(value.trim());
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        render();
    }
}

function deletarTarefa(id: number){
   const tarefasFiltradas = tarefas.filter(tarefa => tarefa.getId() !== id);
   tarefas = tarefasFiltradas;
   localStorage.setItem('tarefas', JSON.stringify(tarefas));
   render();
}

window.addPeloEnter = addPeloEnter;
window.adicionarTarefa = adicionarTarefa;
window.trocaConcluir = trocaConcluir;
window.editarTarefa = editarTarefa;
window.deletarTarefa = deletarTarefa;
