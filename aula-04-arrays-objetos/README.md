# Aula 04 – Arrays e Objetos

## Objetivos de aprendizagem
- Compreender o que são arrays e objetos em JavaScript
- Manipular arrays: adicionar, remover, listar itens
- Manipular objetos: acessar, alterar e listar propriedades
- Praticar métodos como `push`, `splice`, `Object.keys`, `Object.values`
- Reutilizar funções da aula anterior para integração

## Conteúdo
- Arrays: criação, métodos (`push`, `splice`, `join`)
- Objetos: criação, acesso, alteração
- Métodos: `Object.keys`, `Object.values`
- Manipulação de DOM para exibir dados

## Nesta aula, vamos reutilizar:
- Funções e manipulação de DOM da aula 03 (`main`, eventos, criação de elementos)

## Exercícios guiados

### 1. Adicionar fruta ao array
- Crie um input e um botão para adicionar uma nova fruta ao array `frutas`.
- Teste: digite "Uva" e clique em adicionar. Veja se aparece na lista.
- Dica: Se não aparecer, confira se está usando `frutas.push` e atualizando o DOM.

### 2. Mostrar propriedades do objeto
- Crie um botão que, ao ser clicado, mostra todas as propriedades do objeto `pessoa`.
- Teste: clique no botão e veja se aparece "nome, idade".
- Dica: Use `Object.keys(pessoa)`.

### 3. Alterar idade da pessoa
- Crie um input e botão para alterar a idade da pessoa.
- Teste: digite "30" e clique. Veja se a idade muda.
- Dica: Verifique se está convertendo para número e atualizando o objeto.

## Desafios extras
- Remover uma fruta pelo nome (input + botão)
- Listar todos os valores do objeto pessoa (`Object.values`)

## Links de referência
- [MDN Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [W3Schools Arrays](https://www.w3schools.com/js/js_arrays.asp)
