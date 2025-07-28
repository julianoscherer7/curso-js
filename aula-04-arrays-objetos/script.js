// Aula 04 – Arrays e Objetos
// IMPORTANTE: copie daqui as funções de "../aula-03-dom-eventos/script.js"

// Exemplo: Criando e manipulando arrays
const main = document.querySelector('main');

const frutas = ['Maçã', 'Banana', 'Laranja'];
frutas.push('Uva'); // Adicionando uma fruta
frutas.pop(); // Removendo a última fruta
frutas.shift(); // Removendo a primeira fruta
frutas.unshift('Morango'); // Adicionando uma fruta no início
frutas.sort(); // Ordenando as frutas
frutas.reverse(); // Invertendo a ordem das frutas
//frutas.splice(2, 3); // Removendo a fruta no índice 1
main.append(`Frutas: ${frutas.join(', ')}`);

// Exemplo: Objeto simples
const pessoa = { nome: 'Ana', idade: 22 };
main.append(document.createElement('br'));
pessoa.cidade = 'São Paulo'; // Adicionando uma nova propriedade
main.append(`Pessoa: ${pessoa.nome}, ${pessoa.idade} anos`);

frutas.forEach(element => {
  main.append(` Frutas: ${element}`);
main.append(document.createElement('br'));});

for (let index = 0; index < frutas.length; index++) {
  const element = frutas[index];
  main.append(` Frutas: ${element}`);
  main.append(docum ent.createElement('br'));
}
// Exercício 1
// Adicione uma fruta ao array e mostre o novo array
const inputFruta = document.createElement('input');
inputFruta.placeholder = 'Nova fruta';
const btnAddFruta = document.createElement('button');
btnAddFruta.textContent = 'Adicionar Fruta';
main.appendChild(document.createElement('br'));
main.appendChild(inputFruta);
main.appendChild(btnAddFruta);

btnAddFruta.addEventListener('click', () => {
  const nova = inputFruta.value.trim();
  if (!nova) {
    main.append(' Digite uma fruta!');
    return;
  }
  frutas.push(nova);
  main.append(` Frutas: ${frutas.join(', ')}`);
});

// Exercício 2
// Mostre todas as propriedades do objeto pessoa
const btnProps = document.createElement('button');
btnProps.textContent = 'Mostrar Propriedades';
main.appendChild(document.createElement('br'));
main.appendChild(btnProps);

btnProps.addEventListener('click', () => {
  main.append(` Propriedades: ${Object.keys(pessoa).join(', ')}`);
});

// Exercício 3
// Altere a idade da pessoa
const inputIdade = document.createElement('input');
inputIdade.type = 'number';
inputIdade.placeholder = 'Nova idade';
const btnIdade = document.createElement('button');
btnIdade.textContent = 'Alterar Idade';
main.appendChild(document.createElement('br'));
main.appendChild(inputIdade);
main.appendChild(btnIdade);

btnIdade.addEventListener('click', () => {
  const novaIdade = Number(inputIdade.value);
  if (isNaN(novaIdade) || novaIdade <= 0) {
    main.append(' Idade inválida!');
    return;
  }
  pessoa.idade = novaIdade;
  main.append(` Nova idade: ${pessoa.idade}`);
});

// Desafio 1
// Remover fruta pelo nome
const inputRemover = document.createElement('input');
inputRemover.placeholder = 'Fruta para remover';
const btnRemover = document.createElement('button');
btnRemover.textContent = 'Remover Fruta';
main.appendChild(document.createElement('br'));
main.appendChild(inputRemover);
main.appendChild(btnRemover);

btnRemover.addEventListener('click', () => {
  const fruta = inputRemover.value.trim();
  const idx = frutas.indexOf(fruta);
  if (idx === -1) {
    main.append(' Fruta não encontrada!');
    return;
  }
  frutas.splice(idx, 1);
  main.append(` Frutas: ${frutas.join(', ')}`);
});

// Desafio 2
// Listar valores do objeto pessoa
const btnValores = document.createElement('button');
btnValores.textContent = 'Mostrar Valores';
main.appendChild(document.createElement('br'));
main.appendChild(btnValores);

btnValores.addEventListener('click', () => {
  main.append(` Valores: ${Object.values(pessoa).join(', ')}`);
});

// Exportando para próxima aula
export { frutas, pessoa, main };
