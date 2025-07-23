// Aula 02 – Variáveis, Tipos e Funções
// IMPORTANTE: copie daqui as funções de "../aula-01-introducao-js/script.js"

// Exemplo: Função de saudação
const saudacao = nome => `Olá, ${nome}!`;
console.log(saudacao('Ana'));

// Exemplo: Função para verificar paridade
const ehPar = n => n % 2 == 0;
console.log('4 é par?', ehPar(4));
function somar(x, y) {
  return x + y;   
}

// Exemplo: Usando função importada da aula 01
// Copie a função somar(x, y) da aula anterior aqui se necessário
// const somar = (x, y) => x + y;
//console.log('Soma:', somar(Number(prompt('Digite o primeiro número:')), Number( prompt('Digite o segundo número:'))));
console.log(Number('1') + 2);

// Exercício 1
// Crie uma função que recebe um nome e retorna uma saudação
const minhaSaudacao = nome => `Bem-vindo(a), ${nome}!`;
console.log(minhaSaudacao('Lucas'));

// Exercício 2
// Função que verifica se um número é par ou ímpar
const parOuImpar = n => (n % 2 === 0 ? 'Par' : 'Ímpar');
console.log('7 é', parOuImpar(7));

// Exercício 3
// Usando a função somar da aula anterior
// (Descomente para testar)
// const n1 = Number(prompt('Digite o primeiro número:'));
// const n2 = Number(prompt('Digite o segundo número:'));
// if (!isNaN(n1) && !isNaN(n2)) {
//   console.log('Soma:', somar(n1, n2));
// } else {
//   console.log('Valores inválidos!');
// }

// Desafio 1
// Função que retorna o maior de dois números
const maior = (a, b) => (a > b ? a : b);
console.log('Maior entre 10 e 20:', maior(10, 20));

// Desafio 2
// Função que verifica se pode votar
const podeVotar = idade => idade >= 16;
console.log('Pode votar com 15?', podeVotar(15));

// Exportando funções para próxima aula
export { saudacao, ehPar, minhaSaudacao, parOuImpar, maior, podeVotar };
