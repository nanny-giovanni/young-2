const FORMULARIO = document.querySelector('#formulario')
const ENTRADA = document.querySelector('.entrada')
const TAREFAS_CONTAINER = document.querySelector('.tarefas')

const MEMORIA_CACHE = JSON.parse(localStorage.getItem('tarefas'))

FORMULARIO.addEventListener('submit', (event) => {
    event.preventDefault()
    adicionar_tarefa()
})

function adicionar_tarefa(texto) {
    let entrada_texto = ENTRADA.value

    if (texto) {
        entrada_texto = texto.txt
    }

const TAREFAS_LISTA = document.querySelectorAll('li')
const QUANTIDADE_TAREFAS = TAREFAS_LISTA.length
if (entrada_texto && QUANTIDADE_TAREFAS <= 13) {
    const ELEMENTO_TAREFA = document.createElement('li')

    ELEMENTO_TAREFA.innerText = entrada_texto
    TAREFAS_CONTAINER.appendChild(ELEMENTO_TAREFA)
    
    ENTRADA.value = ''

    }
}