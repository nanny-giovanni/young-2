/* PASSO 1 */
const ENTRADA = document.querySelector('input')
const BOTAO = document.querySelector('button')
const FUNDO = document.querySelector('body')

/* PASSO 2 */
BOTAO.addEventListener ('click', alterar_fundo)

// PASSO 3
function alterar_fundo() {
    let cor = ENTRADA.value

    if (cor == 'vermelho') {
        FUNDO.style.backgroundColor = 'red'
    }

    if (cor == 'azul') {
        FUNDO.style.backgroundColor = 'blue'
    }

    if (cor == 'verde') {
        FUNDO.style.backgroundColor = 'green'
    }

    if (cor == 'laranja') {
        FUNDO.style.backgroundColor = 'orange'
    }

    if (cor == 'branco') {
        FUNDO.style.backgroundColor = 'white'
    }

    if (cor == 'preto') {
        FUNDO.style.backgroundColor = 'black'
    }
}
