// Aula 01 – Introdução ao JavaScript

// Exemplo: Mostrar mensagem no console
console.log('Olá, mundo!');

// Exemplo: Declarando variáveis
const nome = 'Maria';
let idade = 20;
const estudante = true;
console.log(nome, idade, estudante);

// Exemplo: Operações matemáticas
const a = 5;
const b = 3;
console.log('Soma:', a + b);

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
