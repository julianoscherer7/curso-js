# Aula 06 – Projeto Mini

## Objetivos de aprendizagem
- Integrar conceitos de arrays, objetos, DOM e APIs
- Criar um mini projeto prático (To-Do List)
- Praticar modularização e exportação de funções
- Salvar dados no localStorage

## Nesta aula, vamos reutilizar:
- Funções de fetch, manipulação de arrays/objetos das aulas anteriores

## Conteúdo
- Mini To-Do List: adicionar, remover, listar tarefas
- Manipulação de DOM dinâmica
- localStorage para persistência
- Modularização de código

## Exercícios guiados

### 1. Marcar tarefa como concluída
- Adicione um checkbox ao lado de cada tarefa para marcar como feita.
- Teste: marque/desmarque e veja se o status muda.
- Dica: Use um array de objetos com `{ texto, concluida }`.

### 2. Salvar tarefas no localStorage
- Salve o array de tarefas no localStorage e recupere ao carregar a página.
- Teste: adicione tarefas, recarregue e veja se permanecem.
- Dica: Use `JSON.stringify` e `JSON.parse`.

## Desafios extras
- Permitir editar o texto de uma tarefa
- Adicionar filtro para mostrar só tarefas concluídas

## Links de referência
- [MDN localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [MDN Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
