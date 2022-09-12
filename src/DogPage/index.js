import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as S from '../Global/style';

export default function Dog(){
  const [dog, setDog] = useState()

  function getDogs(){
    axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
      console.log(response.data.message)
      setDog(response.data.message)
    })
  }

  return(
    <S.DogDiv>
      <S.BoxDog>
        <Link to='/'><S.BtnHome>Página Inicial</S.BtnHome></Link>
        <S.Figure>
            <img src={dog} alt="Imagem de doguinho" />
        </S.Figure>
        <S.BtnDog onClick={()=>{getDogs()}}>Próximo doginho</S.BtnDog>
      </S.BoxDog>
    </S.DogDiv>
  )
}
