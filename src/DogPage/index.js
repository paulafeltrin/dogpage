import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as S from '../Global/style';

export default function Dog(){
  const [dog, setDog] = useState()
  const [img, setImg] = useState(false)

  function getDogs(){
    axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
      console.log(response) //verificar o caminho da imagem no console
      console.log(response.data.message) //caminho da imagem no cosole
      setDog(response.data.message)
      setImg(true)
    })
  }

  return(
    <S.DogDiv>
      <S.BoxDog>
        <Link to='/'><S.BtnHome>Página Inicial</S.BtnHome></Link>
        <S.Figure>
            {img && <img src={dog} alt="Imagem de doguinho" />}
        </S.Figure>
        <S.BtnDog onClick={()=>{getDogs()}}>Clique aqui</S.BtnDog>
      </S.BoxDog>
    </S.DogDiv>
  )
}
