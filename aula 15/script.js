const SENHA_ELEMENTO = document.querySelector('span#senha')
const COPIAR_ELEMENTO = document.querySelector('button#copy')
const TAMANHO_ELEMENTO = document.querySelector('input#tamanho')
const MAIUSCULAS_ELEMENTO = document.querySelector('input#maiusculas')
const MINUSCULAS_ELEMENTO = document.querySelector('input#minusculas')
const NUMEROS_ELEMENTO = document.querySelector('input#numeros')
const CARACTERES_ELEMENTO = document.querySelector('input#caracteres')
const SUBMIT_ELEMENTO = document.querySelector('button.submit')
const RESET_ELEMENTO = document.querySelector('button.reset')
const ALERTA_ELEMENTO = document.querySelector('div.alert')

const MAIUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MINUSCULAS = MAIUSCULAS.toLowerCase()
const NUMEROS = '0123456789'
const caracteres = '!@#$%¨&*()_+={}[]~^ç<>,./?°:;§ªº\|Ç'

SUBMIT_ELEMENTO.addEventListener('click', gerar_senha)

function gerar_senha() {
let tamanho_senha = TAMANHO_ELEMENTO.Value
if(!tamanho_senha) {
    tamanho_senha = 6
}

let senha = ''
if(MAIUSCULAS_ELEMENTO.checked) {
senha += sortear_maiuscula()
}

}

function sortear_maiuscula() {
    let indice_sorteado = Math.random() * MAIUSCULAS.length
    let indice_arredondado = Math.floor(indice_sorteado)
    let sorteadp = MAIUSCULAS[indice_arredondado]
    console.log(sorteadp)
}