import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  //Colocando um novo post dentro do feed/lista:
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(data => {
        setPosts(data);
      });
    })
  }, []);

  return(
    <>
      <input onChange={e => setNewPost(e.target.value)} value={newPost} />
      <ul>
        {posts.map(post => 
          <PostItem key={post.key} post={post} /> )}
      </ul>
    </>
  );
}

/*
Utilizar extensão do Chrome - React dev tools para ajudar na inspeção
do tempo de renderização dos componentes.

Nesse caso o PostList não está sendo renderizado de forma desnecessária
pois o estado dele está sendo alterado e toda vez que um estado de um 
componente é alterado o mesmo deve ser renderizado de novo.

Já o PostItem está sendo renderizado toda vez que o estado do input
é alterado, sendo que em nenhum momento o PostItem está utilizando o
valor do 'newPost', ou seja, as propriedades do PostItem não estão 
mudando pois o newPost não é passado para ele em nenhum momento sendo 
que o estado desse PostItem não está mudando pois o mesmo não tem nenhum tipo
de estado.
Ou seja, o PostItem está sofrendo varias renderizações porq o pai dele
mudou. Esse seria um bom cenário para usar o 'memo'do React.
*/
