// Aula 05 – Fetch e APIs
// IMPORTANTE: copie daqui as funções de "../aula-04-arrays-objetos/script.js"

const main = document.querySelector('main');

// Exemplo: Buscar dados de uma API pública
const btnBuscar = document.createElement('button');
btnBuscar.textContent = 'Buscar Usuário Aleatório';
main.appendChild(btnBuscar);

btnBuscar.addEventListener('click', async () => {
  try {
    const res = await fetch('https://randomuser.me/api/');
    if (!res.ok) throw new Error('Erro na requisição');
    const data = await res.json();
    const user = data.results[0];
    main.append(` Nome: ${user.name.first} ${user.name.last}`);
  } catch (e) {
    main.append(' Erro ao buscar usuário!');
  }
});

// Exercício 1
// Buscar e mostrar nome de usuário do GitHub
const inputGit = document.createElement('input');
inputGit.placeholder = 'Usuário do GitHub';
const btnGit = document.createElement('button');
btnGit.textContent = 'Buscar GitHub';
main.appendChild(document.createElement('br'));
main.appendChild(inputGit);
main.appendChild(btnGit);

btnGit.addEventListener('click', async () => {
  const user = inputGit.value.trim();
  if (!user) {
    main.append(' Digite um usuário!');
    return;
  }
  try {
    const res = await fetch(`https://api.github.com/users/${user}`);
    if (!res.ok) throw new Error('Não encontrado');
    const data = await res.json();
    main.append(` Nome: ${data.name || 'Sem nome'}`);
  } catch (e) {
    main.append(' Erro ao buscar!');
  }
});

// Exercício 2
// Buscar CEP via ViaCEP
const inputCep = document.createElement('input');
inputCep.placeholder = 'Digite o CEP';
const btnCep = document.createElement('button');
btnCep.textContent = 'Buscar CEP';
main.appendChild(document.createElement('br'));
main.appendChild(inputCep);
main.appendChild(btnCep);

btnCep.addEventListener('click', async () => {
  const cep = inputCep.value.replace(/\D/g, '');
  if (cep.length !== 8) {
    main.append(' CEP inválido!');
    return;
  }
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!res.ok) throw new Error('Erro na API');
    const data = await res.json();
    if (data.erro) throw new Error('CEP não existe');
    main.append(` Cidade: ${data.localidade}`);
  } catch (e) {
    main.append(' Erro ao buscar CEP!');
  }
});

// Exercício 3
// Buscar piada Chuck Norris
const btnPiada = document.createElement('button');
btnPiada.textContent = 'Piada Chuck Norris';
main.appendChild(document.createElement('br'));
main.appendChild(btnPiada);

btnPiada.addEventListener('click', async () => {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    if (!res.ok) throw new Error('Erro na API');
    const data = await res.json();
    main.append(` Piada: ${data.value}`);
  } catch (e) {
    main.append(' Erro ao buscar piada!');
  }
});

// Desafio 1
// Buscar lista de posts (JSONPlaceholder)
const btnPosts = document.createElement('button');
btnPosts.textContent = 'Listar Posts';
main.appendChild(document.createElement('br'));
main.appendChild(btnPosts);

btnPosts.addEventListener('click', async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('Erro na API');
    const posts = await res.json();
    posts.forEach(p => main.append(`\n${p.title}`));
  } catch (e) {
    main.append(' Erro ao buscar posts!');
  }
});

// Desafio 2
// Buscar imagem de cachorro
const btnDog = document.createElement('button');
btnDog.textContent = 'Dog Aleatório';
main.appendChild(document.createElement('br'));
main.appendChild(btnDog);

btnDog.addEventListener('click', async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!res.ok) throw new Error('Erro na API');
    const data = await res.json();
    const img = document.createElement('img');
    img.src = data.message;
    img.alt = 'Dog';
    img.style.maxWidth = '200px';
    main.appendChild(img);
  } catch (e) {
    main.append(' Erro ao buscar dog!');
  }
});

// Exportando para próxima aula
export { main };
