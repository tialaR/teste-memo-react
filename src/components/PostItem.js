import React, { memo } from 'react';

function PostItem({ post }) {
  return(
    <li>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  );
}

export default memo(PostItem);

/*
memo - Quando um componente entrar no ciclo de reconciliação 
do react (quando cada post item for requisidado para ter uma
nova renderização) o 'memo' vai verificar: 
- estado mudou ?
- prop mudou ?
Se a resposta for não então ele não renderiza novamente/
Ele bloqueia a renderização caso nenhum estado ou propriedade
tenha sido alterado.

O Memo não deve ser utilizado sempre - somente em casos onde
o componente renderiza muitas vezes de forma desnecessária, ou seja,
quando ele não tem propriedades e estados alterados.
*/
