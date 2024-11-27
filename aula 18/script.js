let nivel = 1
let vidas = 3
let numero_inicial = 1

const NIVEL_DISPLAY = document.querySelector('#nivel')
const VIDAS_DISPLAY = document.querySelector('#vidas')
const CONTAINER_MENSAGEM = document.querySelector('#mensagem')
const TEXTO_MENSAGEM = document.querySelector('#mensagem-texto')
const CONTAINER_GAME = document.querySelector('#game-container')
const REINICIAR_BOTAO = document.querySelector('button')

const niveis = [
    { quadrados: 4, vidas: 3 },
    { quadrados: 6, vidas: 4 },
    { quadrados: 8, vidas: 5 },
    { quadrados: 10, vidas: 6 },
    { quadrados: 14, vidas: 8 },
]

REINICIAR_BOTAO.addEventListener('click', reiniciar_jogo)

function iniciar_nivel() {
    const CONFIG = niveis[nivel - 1]
    vidas = CONFIG.vidas
    numero_inicial = 1

    TEXTO_MENSAGEM.textContent = ''
    NIVEL_DISPLAY.textContent = nivel
    VIDAS_DISPLAY.textContent = vidas

    CONTAINER_GAME.innerHTML = ''
    CONTAINER_GAME.style.gridTemplateColumns = `repeat(${Math.ceil(CONFIG.quadrados / 2)}, 100px)`;
    for (let i = 0; i < CONFIG.quadrados; i++){
        const QUADRADO = document.createElement('div')
        QUADRADO.classList.add('quadrado')
        QUADRADO.addEventListener('click', chacoalhar_quadrado)
        CONTAINER_GAME.appendChild(QUADRADO)
    }
    gerar_sequencia()
}

function gerar_sequencia() {
    const TODOS_QUADRADOS = Array.from(document.querySelectorAll('.quadrado'))
    const NUMEROS = Array.from({ length: TODOS_QUADRADOS.length }, (_, i) => i + 1)
    NUMEROS.sort(() => Math.random() - 0.5)
    TODOS_QUADRADOS.forEach((quadrado, indice) => {
        quadrado.dataset.number = NUMEROS[indice]
    })
}

function chacoalhar_quadrado(event) {
    const QUADRADO = event.target
    const NUMERO = parseInt(QUADRADO.dataset.number)

    QUADRADO.textContent = NUMERO
    if (NUMERO === numero_inicial) {
        numero_inicial++
        if (numero_inicial > niveis[nivel - 1].quadrados) {
            if (nivel < niveis.length) {
                nivel++
                iniciar_nivel()
            }
            else {
                fim_de_jogo('parabéns! você completou todos os níveis')
            }
        }
    }
    else {
        vidas--
        VIDAS_DISPLAY.textContent = vidas
        QUADRADO.classList.add('chacoalhar')

        setTimeout(() => {
            QUADRADO.classList.remove('chacoalhar')
            QUADRADO.textContent = ''
        }, 500)
        if (vidas === 0) {
            fim_de_jogo('Game Over!!!')
        }
    }
}

function fim_de_jogo(texto) {
    TEXTO_MENSAGEM.textContent = texto
    CONTAINER_MENSAGEM.classList.remove('escondido')
    Array.from(document.querySelectorAll('.quadrado')).forEach(quadrado => {
        quadrado.style.display = 'nome'
    })

}

function reiniciar_jogo() {
    nivel = 1
    iniciar_nivel()
    CONTAINER_MENSAGEM.classList.add('escondido')
}

iniciar_nivel() 