// 1 identificar elemento
const QUADRADO = document.querySelector('div')

//2 criar eventos
QUADRADO.addEventListener('click', clicado)
QUADRADO.addEventListener('dblclick', clicavel2x)
QUADRADO.addEventListener('mousedown', segurar)
QUADRADO.addEventListener('mouseenter', entrar)
QUADRADO.addEventListener('mouseleave', sair)
QUADRADO.addEventListener('mousemove', mover)


// 3 criar funções do evento
function clicado() {
    QUADRADO.style.backgroundColor = "white"
}

function clicavel2x() {
    QUADRADO.innerText = 'obrigado:>'
}

function segurar () {
    QUADRADO.style.backgroundColor = "black"
}

function entrar () {
    QUADRADO.innerHTML = 'denji'
}

function sair () {
    QUADRADO.style.backgroundColor = "yellow"
}

function mover () {
    QUADRADO.innerText = 'chainsaw man'
}