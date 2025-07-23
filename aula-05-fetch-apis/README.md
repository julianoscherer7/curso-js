# Aula 05 – Fetch e APIs

## Objetivos de aprendizagem
- Entender o que é uma API e como consumir dados externos
- Utilizar `fetch` para buscar dados de APIs públicas
- Tratar respostas e erros de requisições
- Praticar manipulação de DOM com dados vindos de APIs

## Nesta aula, vamos reutilizar:
- Arrays, objetos e manipulação de DOM da aula 04

## Conteúdo
- `fetch`, `async/await`, tratamento de erros
- APIs públicas: Random User, GitHub, ViaCEP, Chuck Norris, JSONPlaceholder
- Manipulação de respostas JSON

## Exercícios guiados

### 1. Buscar usuário do GitHub
- Input para digitar usuário, botão para buscar e mostrar nome do perfil.
- Teste: digite "octocat" e veja se aparece o nome.
- Dica: Se não aparecer, confira se está usando `await fetch` e `res.json()`.

### 2. Buscar CEP
- Input para CEP, botão para buscar e mostrar cidade.
- Teste: digite "01001000" e veja se aparece "São Paulo".
- Dica: Verifique se o CEP tem 8 dígitos e se a API retorna erro.

### 3. Buscar piada Chuck Norris
- Botão para buscar piada e mostrar na tela.
- Teste: clique e veja se aparece uma piada.
- Dica: Se não aparecer, confira a URL da API.

## Desafios extras
- Listar títulos dos 5 primeiros posts do JSONPlaceholder
- Mostrar imagem de cachorro aleatório (Dog API)

## Links de referência
- [MDN Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [MDN async/await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
- [W3Schools Fetch](https://www.w3schools.com/js/js_api_fetch.asp)
