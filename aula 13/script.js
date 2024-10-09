const QUESTOES_QUIZ = [
    {
        questao: 'Qual é o Melhor protagonista dos animes?',
        a: 'Itadori',
        b: 'Naruto',
        c: 'Saitama',
        d: 'Denji',
        correta: 'd',
    },
    {
        questao: 'No minecraft Pixelmon, como se faz para evoluir um inkay?',
        a: 'deve trocar ele com um amigo',
        b: 'deve virar o munitor de cabeça para baixo',
        c: 'se deve estar a uma altura superior a 137 blocos e com o nivel superior a 29',
        d: 'ele não evolui',
        correta: 'c',
    },
    {
        questao: 'quantos capitulos tem chainsaw man?',
        a: '179',
        b: '180',
        c: '190',
        d: '169',
        correta: 'a',
    },
    {
        questao: 'qual entre esses eu prefiro?',
        a: 'refri no ponto',
        b: 'açai completo',
        c: 'suco natural',
        d: 'churrasco',
        correta: 'b',
    },
    {
        questao: 'qual é a formula de baskara?',
        a: 'b²-4ac',
        b: 'a²+b²=c²',
        c: 'sim',
        d: '-b+-(raiz quadrada de delta)/2.a',
        correta: 'd',
    },
    {
        questao: 'qual o nome do pénultimo boss de resident evil 4 remake?',
        a: 'albert wesker',
        b: 'ada wong',
        c: 'sadler',
        d: 'krauser',
        correta: 'd',
    },
    {
        questao: 'quantos residents evil (numerados) existem?',
        a: '4',
        b: '7',
        c: '8',
        d: '9',
        correta: 'c',
    },
    {
        questao: 'quantos dias tem esse ano?',
        a: '366',
        b: '365',
        c: '360',
        d: '5 dias, pq parece que ainda é março, pelamor de deus, tempo para um pouco',
        correta: 'a',
    },
    {
        questao: 'qual o meu jogo favorito',
        a: 'minecraft',
        b: 'god of war',
        c: 'resident evil 4 remake',
        d: 'dying light',
        correta: 'd',
    },
    {
        questao: 'o que eu vou fazer quando chegar em casa?',
        a: 'comer',
        b: 'todas as opções',
        c: 'chorar com medo da escola',
        d: 'dormir',
        correta: 'b',
    },
]

const QUIZ_TITULO = document.querySelector('h1')
const ALTERNATIVA_A = document.querySelector('#text_a')
const ALTERNATIVA_B = document.querySelector('#text_b')
const ALTERNATIVA_C = document.querySelector('#text_c')
const ALTERNATIVA_D = document.querySelector('#text_d')
const BOTAO = document.querySelector('button')
const QUIZ_CONTAINER = document.querySelector('.container')
const ALTERNATIVAS = document.querySelectorAll('.resposta')

let questao_atual = 0
let acertos = 0
let verificou = false

// EVENTOS
window.onload = carregar_quiz()
BOTAO.addEventListener('click', verificar)

// FUNÇÕES
function carregar_quiz() {
    const QUESTAO = QUESTOES_QUIZ[questao_atual]

ALTERNATIVAS.forEach((alternativa) => {
    alternativa.checked = false
    document.querySelector(`label[for=${alternativa.id}]`).classList.remove('correta', 'incorreta')
})

    QUIZ_TITULO.innerText = QUESTAO.questao
    ALTERNATIVA_A.innerText = QUESTAO.a
    ALTERNATIVA_B.innerText = QUESTAO.b
    ALTERNATIVA_C.innerText = QUESTAO.c
    ALTERNATIVA_D.innerText = QUESTAO.d
    BOTAO.innerText = 'Verificar'
    verificou = false

}

function verificar() {
    if (!verificou) {
        verificar_resposta()
    }
    else {
        proxima_pergunta()
    }
}

function pegar_resposta() {
    let resposta = undefined

    ALTERNATIVAS.forEach((alternativa) => {
        if (alternativa.checked) {
            resposta = alternativa.id
        }
    })
    return resposta
}

function verificar_resposta() {
    const RESPOSTA_JOGADOR = pegar_resposta()
    const RESPOSTA_CORRETA = QUESTOES_QUIZ[questao_atual].correta

    ALTERNATIVAS.forEach((alternativa) => {
        const LABEL = document.querySelector(`label[for=${alternativa.id}]`)
        if (alternativa.id === RESPOSTA_CORRETA) {
            LABEL.classList.add('correta')
        }
        else if (alternativa. checked) {
            LABEL.classList.add('incorreta')
        }
    })

    if (RESPOSTA_JOGADOR === RESPOSTA_CORRETA) {
        acertos++
    }
    BOTAO.innerText = 'proxima'
    verificou = true

}

function proxima_pergunta() {
    questao_atual++
    maximo_de_questoes = QUESTOES_QUIZ.length
    if (questao_atual < maximo_de_questoes) {
        carregar_quiz()
    }
    else {
        QUIZ_CONTAINER.innerHTML = `<h1 id= "questao">Você acertou ${acertos} de ${maximo_de_questoes} perguntas!</h1>`
    }
}