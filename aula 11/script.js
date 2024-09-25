const NUMERO = document.querySelector('div.numero span')
const BTN_ZERAR = document.querySelector('.zerar')
const BTN_VOLTAR = document.querySelector('.voltar')
const BTN_AVANCAR = document.querySelector('.avancar')

let contador = 0

BTN_ZERAR.addEventListener('click', zerar)

function zerar() {
    contador = 0
    NUMERO.innerText = contador
}

BTN_AVANCAR.addEventListener('click', avancar)
 
function avancar() {
    if (contador < 99999)
    contador += 1
    NUMERO.innerText = contador
}

BTN_VOLTAR.addEventListener('click', voltar)

function voltar() {
    if (contador > -99999)
    contador -= 1
    NUMERO.innerText = contador
}