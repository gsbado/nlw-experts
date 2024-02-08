const perguntas = [
    {
        pergunta: "Qual é o nome do herói principal em 'Homem de Ferro'?",
        respostas: [
            "Steve Rogers",
            "Tony Stark",
            "Bruce Banner",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o vilão principal em 'Vingadores: Guerra Infinita'?",
        respostas: [
            "Loki",
            "Thanos",
            "Ultron",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da pedra do infinito que concede controle mental em 'Vingadores'?",
        respostas: [
            "Pedra da Mente",
            "Pedra da Alma",
            "Pedra da Realidade",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o pai adotivo de Peter Quill em 'Guardiões da Galáxia'?",
        respostas: [
            "Yondu Udonta",
            "Ego, o Planeta Vivo",
            "Nova Prime",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o verdadeiro nome do super-herói 'Pantera Negra'?",
        respostas: [
            "T'Challa",
            "N'Jobu",
            "M'Baku",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é conhecido como o Deus do Trovão no MCU?",
        respostas: [
            "Tony Stark",
            "Peter Parker",
            "Thor",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da primeira inteligência artificial de Tony Stark?",
        respostas: [
            "J.A.R.V.I.S.",
            "F.R.I.D.A.Y.",
            "H.E.L.P.E.R.",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o mentor de Peter Parker em 'Homem-Aranha: De Volta ao Lar'?",
        respostas: [
            "Nick Fury",
            "Tony Stark",
            "Hank Pym",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do reino natal do Doutor Estranho?",
        respostas: [
            "Asgard",
            "Wakanda",
            "Kamar-Taj",
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o inimigo principal em 'Homem-Formiga'?",
        respostas: [
            "Obadiah Stane",
            "Baron Zemo",
            "Darren Cross",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do cientista que desenvolve a fórmula do soro do supersoldado?",
        respostas: [
            "Dr. Arnim Zola",
            "Dr. Abraham Erskine",
            "Dr. Samuel Sterns",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o responsável pela criação do Visão em 'Vingadores: A Era de Ultron'?",
        respostas: [
            "Bruce Banner",
            "Tony Stark",
            "Hank Pym",
        ],
        correta: 1
    }
];

const quiz = document.querySelector ('#quiz')
const template = document.querySelector('template')

//d
//set não permite repetição da informação
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector ('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    //instrução que vai permitir escolher uma opção pra cada pergunta do quizz
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //isso é uma arrow function e significa que toda vez que essa função for executada, 
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if (estaCorreta) {
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
}