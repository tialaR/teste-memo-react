import React from 'react';
import PostList from './components/Posts';

function App() {
  return (
    <div>
      <PostList />
    </div>
  );
}

export default App;

/*
RECONCILIATION
- É o que acontece dentro do React quando ocorre a alteração de
algum componente.
ex: estado ou propriedade alterados

- Processo de reconciliação do React:
Quando um componente sofre alteração no seu estado, propriedade ou até
mesmo quando o seu componente Pai sofre alguma alteração esse mesmo
componente entra em um fluxo de reconciliação, ou seja, inicia uma nova
renderização daquele componente.

- Reconciliation Funcionamento:
Toda vez que uma alteração é realizada no componente é gerada uma nova árvore 
de elementos/novo html (DOM) e é comparada com a árvore já existente dentro
da DOM. Se essas árvores tiverem alguma diferença o React da um replace 
com a nova árvore criada.
Esse é um processo rápido, mas pode se tornar um problema quando se tratam
de componentes muito grandes

- memo:
Ajuda a evitar renderizações desnecessárias de componentes.
Ele bloqueia a renderização de um componente se a mesma 
não for necessária, acarretando em um ganho de performance 
para a aplicação.
*/
