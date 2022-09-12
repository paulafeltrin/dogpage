import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../Global/style';

export default function Home(){
  return(
    <S.Container>
      <S.BoxHome>
        <S.H1>Bem-vindo à página dos Doguinhos!</S.H1>
        <S.P>Este é um site exclusivo para mostrar toda a beleza de ser cão!!!</S.P>
        <S.P>Clique no botão a seguir para conhecer os nossos incríveis modelos!</S.P>
        <Link to='dogpage'><S.Btn>Vá para dogPage</S.Btn></Link>
      </S.BoxHome>
    </S.Container>
  )
}