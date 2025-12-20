function adicionarTarefa() {
    let inputTarefa = document.getElementById("inputTarefa")
    let mensagem = document.getElementById("mensagem")

    if(inputTarefa.value.length == 0){
        mensagem.innerText = "Não foi possível adicionar uma tarefa, é necessário digitar alguma."
    } else {
        let mensagem = "Tarefa adicionada com sucesso!";
    

    
        let tarefa = inputTarefa.value
        document.getElementById("mensagem").textContent = mensagem;

        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")

        novaTarefa.textContent = tarefa

        listaTarefas.appendChild(novaTarefa)
    

        inputTarefa.value = ""
    }
}

function Limpar(){
    mensagem.innerHTML = ""
    listaTarefas.innerHTML = ""
}