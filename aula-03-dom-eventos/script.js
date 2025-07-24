// Aula 03 – Manipulação do DOM e Eventos
// IMPORTANTE: copie daqui as funções de "../aula-02-variaveis-funcoes/script.js"

// Exemplo: Selecionando elementos e manipulando texto
const main = document.querySelector('main');
/* const main = document.getElementById('main');
const main = document.getElementsByClassName('principal')[0];
const main = document.getElementsByName('principal')[0];
const main = document.getElementsByTagName('div'); */

// Exemplo: Criando um botão e adicionando evento
const btnSaudacao = document.createElement('button');
btnSaudacao.textContent = 'Mostrar Saudação';
btnSaudacao.id = 'btnSaudacao';
btnSaudacao.className = 'btn-saudacao';
btnSaudacao.name = 'btnSaudacao';
btnSaudacao.style.backgroundColor = '#4CAF50';
btnSaudacao.style.color = '#fff';
btnSaudacao.style.padding = '10px 20px';
btnSaudacao.dataset.minha_propriedade = 'valorExemplo';
btnSaudacao.setAttribute('title', 'Clique para ver a saudação');
main.appendChild(btnSaudacao);


btnSaudacao.addEventListener('click', () => {
  main.append('Olá, bem-vindo ao DOM!');
});
main.addEventListener('click', (event) => {
    alert('Você clicou no botão main!');
});
// Exercício 1
// Botão que mostra saudação usando função da aula anterior
const btnSaudacao2 = document.createElement('button');
btnSaudacao2.textContent = 'Saudar Usuário';
main.appendChild(btnSaudacao2);

btnSaudacao2.addEventListener('click', () => {
  // Copie a função minhaSaudacao da aula anterior aqui
  const minhaSaudacao = nome => `Bem-vindo(a), ${nome}!`;
  main.append(` ${minhaSaudacao('Aluno')}`);
});

// Exercício 2
// Input + botão para par/ímpar
const inputNum = document.createElement('input');
inputNum.type = 'number';
inputNum.placeholder = 'Digite um número';
const btnParImpar = document.createElement('button');
btnParImpar.textContent = 'Verificar Par/Ímpar';
main.appendChild(document.createElement('br'));
main.appendChild(inputNum);
main.appendChild(btnParImpar);

btnParImpar.addEventListener('click', () => {
  const valor = Number(inputNum.value);
  if (isNaN(valor)) {
    main.append(' Valor inválido!');
    return;
  }
  // Copie a função parOuImpar da aula anterior aqui
  const parOuImpar = n => (n % 2 === 0 ? 'Par' : 'Ímpar');
  main.append(` Resultado: ${parOuImpar(valor)}`);
});

// Exercício 3
// Dois inputs + botão para somar
const inputA = document.createElement('input');
inputA.type = 'number';
inputA.placeholder = 'A';
const inputB = document.createElement('input');
inputB.type = 'number';
inputB.placeholder = 'B';
const btnSomar = document.createElement('button');
btnSomar.textContent = 'Somar';
main.appendChild(document.createElement('br'));
main.appendChild(inputA);
main.appendChild(inputB);
main.appendChild(btnSomar);

btnSomar.addEventListener('click', () => {
  const n1 = Number(inputA.value);
  const n2 = Number(inputB.value);
  if (isNaN(n1) || isNaN(n2)) {
    main.append(' Valores inválidos!');
    return;
  }
  // Copie a função somar da aula anterior aqui
  const somar = (x, y) => x + y;
  main.append(` Soma: ${somar(n1, n2)}`);
});

// Desafio 1
// Botão para limpar resultados
const btnLimpar = document.createElement('button');
btnLimpar.textContent = 'Limpar Resultados';
main.appendChild(document.createElement('br'));
main.appendChild(btnLimpar);

btnLimpar.addEventListener('click', () => {
  main.innerHTML = '';
  main.appendChild(btnSaudacao);
  main.appendChild(btnSaudacao2);
  main.appendChild(document.createElement('br'));
  main.appendChild(inputNum);
  main.appendChild(btnParImpar);
  main.appendChild(document.createElement('br'));
  main.appendChild(inputA);
  main.appendChild(inputB);
  main.appendChild(btnSomar);
  main.appendChild(document.createElement('br'));
  main.appendChild(btnLimpar);
});

// Desafio 2
// Evento mouseover
main.addEventListener('mouseover', () => {
  main.style.background = '#e3f0ff';
});
main.addEventListener('mouseout', () => {
  main.style.background = '#fff';
});

// Exportando funções para próxima aula
export { main };
