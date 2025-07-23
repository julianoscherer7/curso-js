// Aula 01 – Introdução ao JavaScript

// Exemplo: Mostrar mensagem no console
console.log('Olá, mundo!');
console.error('Olá, mundo!');
console.warn('Olá, mundo!');
console.info('Olá, mundo!');


// Exemplo: Declarando variáveis
const nome = 'Maria';
let idade = 20;
const estudante = true;
var cidade = 'São Paulo';
console.log(nome, idade, estudante, cidade);

// Exemplo: Operações matemáticas
const a = 1;
const b = 3;
console.log('Soma:', (a + b));

if (a > b) {
  console.log(`${a} é maior que ${b}`);
} else if (a < b) {
    console.log(`${a} é menor que ${b}`);
    } else {
    console.log(`${a} é igual a ${b}`);
}

switch (a) {
  case 1:
    console.log('A is 1');
    break;
  case 2:    
    console.log('A is 2');    
    break;    
  default:
    console.log('A is not 1 or 2');    
}
   

// Exemplo: Laços de repetição
for (var i = 0; i < 5; i++) {    
    console.log(i);    
}

var meu_array = ['a', 'b', 'c'];
meu_array.forEach(function(item) {
    if (item === 'b') {
        console.log('Encontrado:', item);
    }  
    console.log('Item:', item);
});

// Exemplo: Funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao('João'));

// Exemplo: Função anônima
const saudacaoAnonima = function(nome) {
    return `Olá, ${nome}!`;
};
console.log(saudacaoAnonima('Maria'));

// Exemplo: Arrow function
const saudacaoArrow = (nome) => `Olá, ${nome}!`;
console.log(saudacaoArrow('Pedro'));

function imprimeNome(nome) {
    console.log("Olá, " + nome + "!");
}
imprimeNome(function(nome) {
        return nome.toLowerCase().trim();
    }(" JOÃO     "));

// Exercício 1
// (Altere o texto abaixo para testar)
console.log('Exercício 1: Olá, mundo!');

// Exercício 2
let meuNome = 'João';
let minhaIdade = 25;
let souEstudante = false;
console.log(meuNome, minhaIdade, souEstudante);

// Exercício 3
const num1 = 10;
const num2 = 15;
console.log('Soma dos números:', num1 + num2);

// Desafio 1
// Peça um número ao usuário e mostre o dobro
// (Descomente para testar)
// const valor = Number(prompt('Digite um número:'));
// if (!isNaN(valor)) {
//   console.log('Dobro:', valor * 2);
// } else {
//   console.log('Valor inválido!');
// }

// Desafio 2
// Peça a idade e diga se é maior de idade
// (Descomente para testar)
// const idadeUsuario = Number(prompt('Qual sua idade?'));
// if (!isNaN(idadeUsuario)) {
//   if (idadeUsuario >= 18) {
//     console.log('Maior de idade');
//   } else {
//     console.log('Menor de idade');
//   }
// } else {
//   console.log('Idade inválida!');
// }

// Exportando funções/objetos para reutilização
export const dadosUsuario = { nome, idade, estudante };
export const somar = (x, y) => x + y;
