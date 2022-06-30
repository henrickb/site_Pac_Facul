let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let questao = 0
let placar = 0
let erros = 0

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')


const q0 = {
    numQuestao  :1,
    pergunta    :"O que é a tecnologia robótica?",
    alternativaA:"É a ciência que estuda as tecnologias associadas a concepção e construção de robôs, unindo a informática, mecânica e elétrica, com o objetivo de automatizar processos e/ou perigosos.",
    alternativaB:"É a ciência que estuda os robôs na sociedade contemporânea, e como eles podem ser perigosos para a evolução humana atualmente",
    alternativaC:"É a tecnologia que constrói e estuda apenas carros autônomos, em prol de um transito melhor",
    alternativaD:"É a tecnologia que tem como único objetivo aprimorar os atuais aparelhos celulares, afim de que eles possam se tornar aparelhos de espionagem",
    correta     :"a",
}

const q1 = {
    numQuestao  :2,
    pergunta    :"Porque robótica na TI",
    alternativaA:"A robótica na T.I. é importante pela criação de processos mais rápidos e eficientes. Assim como o aumento na produtividade. redução de custos, ganho de eficiência, menos riscos e aumento no número de empregos",
    alternativaB:"Por que sem ela voltaríamos a idade das pedras",
    alternativaC:"Por que diminui os custos de mão de obra em várias áreas, apenas por isso",
    alternativaD:"Ela não é importante, robótica é uma área onde apenas se perde tempo",
    correta     :"a",
}

const q2 = {
    numQuestao  :3,
    pergunta    :"Para fazer um semáforo simples no arduino precisamos de quantos resistores?",
    alternativaA:"1",
    alternativaB:"2",
    alternativaC:"3",
    alternativaD:"4",
    correta     :"b",
}

const q3 = {
    numQuestao  :4,
    pergunta    :"Qual entrada precisa ser ligada na linha negativa da placa de ensaio no Arduino para que o projeto de certo?",
    alternativaA:"A0",
    alternativaB:"A5",
    alternativaC:"GND",
    alternativaD:"5V",
    correta     :"c",
}

const q4 = {
    numQuestao  :5,
    pergunta    :"Quantas entradas tem um acionador de motor ponte H L293D(muito utilizado na robótica)",
    alternativaA:"30",
    alternativaB:"16",
    alternativaC:"29",
    alternativaD:"15",
    correta     :"b",
}

const q5 = {
    numQuestao  :6,
    pergunta    :"O que é PID e o que ele faz?",
    alternativaA:"O controle PID não fornece uma variação contínua da saída dentro de um mecanismo de realimentação, ou seja, dentro de um mecanismo de looping.",
    alternativaB:"O PID é um sistema de controle desproporcional com ação integral e derivativa. Esse sistema um dia já foi o mais eficiente sistema de controle. ",
    alternativaC:"É o controle de pressão utilizando PID, sigla para Proporcional, Integral, Derivativo. O controle PID fornece uma variação contínua da saída dentro de um mecanismo de realimentação de loop de controle para controlar com precisão o processo, removendo a oscilação e aumentando a eficiência.",
    alternativaD:"O PID é um sistema de controle proporcional com ação integral e derivativa. Esse sistema ainda é o mais eficiente sistema de controle na atualidade. ",
    correta     :"d",
}

const q6 = {
    numQuestao  :7,
    pergunta    :"Que tipo de plataforma de prototipagem eletrônica é usada originalmente na construção de um robô seguidor de linha?",
    alternativaA:"Arduino",
    alternativaB:"Uno r3",
    alternativaC:"Wemos D1",
    alternativaD:"Atmega 16u2",
    correta     :"a",
}

const q7 = {
    numQuestao  :8,
    pergunta    :"Quais linguagens da programação são mais recomendadas para a montagem de um site para iniciantes? (Como alunos do primeiro semestre de Engenharia de Software)",
    alternativaA:"HTML5, CSS e Java Script",
    alternativaB:"Python",
    alternativaC:"Programação em blocos",
    alternativaD:"Todas as respostas acima trabalhadas de forma conjunta.",
    correta     :"a",
}

const q8 = {
    numQuestao  :9,
    pergunta    :"O que é um robô seguidor de linha?",
    alternativaA:"Robôs capazes de andar em cima de qualquer fio, como um barbante, por exemplo.",
    alternativaB:"Robôs seguidores de linha são máquinas capazes de percorrer um determinado trajeto através de marcações no chão.",
    alternativaC:"Robôs capazes de seguir marcações, desde que sejam pretas.",
    alternativaD:"Robôs capazes de seguir marcações, desde que sejam brancas.",
    correta     :"b",
}

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

let totalDeQuestoes = (questoes.length)
total.innerText = totalDeQuestoes

const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")

function proximaQuestao(nQuestao){
    numQuestao.innerText = questoes[nQuestao].numQuestao
    pergunta.innerText = questoes[nQuestao].pergunta
    a.innerText = questoes[nQuestao].alternativaA
    b.innerText = questoes[nQuestao].alternativaB
    c.innerText = questoes[nQuestao].alternativaC
    d.innerText = questoes[nQuestao].alternativaD
    numero.innerText = nQuestao + 1
}

proximaQuestao(questao)

function verificarSeAcertou(quest) {

    if(quest === questoes[questao].correta) {
        placar += 1
        instrucoes.innerHTML =  `Pontos: ${placar}`
    }else{
        erros +=1
    }

    if(questao===8){
        return fimDoJogo()
    }

    questao +=1
    proximaQuestao(questao)
}

const modal = document.querySelector(".questoes")

function fimDoJogo() {

    modal.innerHTML = ""
    const mensagem = document.createElement("p")
    const button = document.createElement("button")
    button.className = "Reset"
    button.innerText = "Tenta Dinovo?"
    
    button.addEventListener("click", ()=>{
        window.location.reload()
    })
   
    if(placar === 9){
        mensagem.innerText = "Parabens você acertou tudo!"
    }else{
        mensagem.innerText = `Você errou: ${erros}`
    }
    
    modal.appendChild(mensagem)
    modal.appendChild(button)
}

a.addEventListener("click", (evt)=>{
    verificarSeAcertou("a")
})

b.addEventListener("click", (evt)=>{
    verificarSeAcertou("b")
})

c.addEventListener("click", (evt)=>{
    verificarSeAcertou("c")
})

d.addEventListener("click", (evt)=>{
    verificarSeAcertou("d")
})


