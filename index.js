const perguntas = [
    {
       pergunta: "Qual palavra-chave é utilizada para declarar uma variável que não pode ser reatribuída em JavaScript?",
       respostas: [
           "let",
           "const",
           "var",
       ],
       correta: 1
   },
   {
       pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
       respostas: [
           "Uma linguagem de programação.",
           "Um modelo para representar documentos HTML e XML.",
           "Uma biblioteca JavaScript popular.",
       ],
       correta: 1
   },
   {
       pergunta: "Como se chama a função utilizada para imprimir mensagens no console em JavaScript?",
       respostas: [
           "print()",
           "console.log()",
           "display()",
       ],
       correta: 1
   },
   {
       pergunta: "Qual é a função do operador '===' em JavaScript?",
       respostas: [
           "Comparação de valores sem considerar o tipo",
           "Atribuição de valores",
           "Comparação estrita de valores e tipos",
       ],
       correta: 2
   },
   {
       pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
       respostas: [
           "push()",
           "add()",
           "append()",
       ],
       correta: 0
   },
   {
       pergunta: "O que é o JSON em JavaScript?",
       respostas: [
           "Uma linguagem de programação.",
           "Um formato de dados para intercâmbio de informações.",
           "Uma biblioteca JavaScript popular.",
       ],
       correta: 1
   },
   {
       pergunta: "Como se chama a estrutura condicional que avalia várias condições em JavaScript?",
       respostas: [
           "if",
           "switch",
           "for",
       ],
       correta: 1
   },
   {
       pergunta: "O que é o evento 'click' em JavaScript?",
       respostas: [
           "Um tipo de dado.",
           "Uma função interna.",
           "Uma ação do usuário, como clicar em um elemento.",
       ],
       correta: 2
   },
   {
       pergunta: "Qual é a finalidade do método 'querySelector()' em JavaScript?",
       respostas: [
           "Selecionar elementos HTML pelo nome.",
           "Selecionar elementos HTML pela classe.",
           "Selecionar elementos HTML pelo seletor CSS.",
       ],
       correta: 2
   },
   {
       pergunta: "O que é o AJAX em JavaScript?",
       respostas: [
           "Uma linguagem de programação.",
           "Uma técnica para atualizar a página inteira.",
           "Uma técnica para fazer requisições assíncronas ao servidor.",
       ],
       correta: 2
   },
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