import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
export const Container = styled.div`
background-color: lightblue;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const BoxHome = styled.section`
  background-color: lavender;
  border-radius: 7px;
  padding: 5px;
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;

  @media(max-width: 1250px){
    width: 70%;
    height: 70vh;
  }
  @media(max-width: 400px){
    width: 80%;
    height: 80vh;
  }
`
export const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const P = styled.p`
  font-size: 1.2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Btn = styled.button`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: lighter;
  border-radius: 5px;
  padding: 1.2vh 2vw;
  border: 1px solid aqua;

  :active{
    border: none;
  }
  :hover{
    background-color: aqua;
  }
`

export const DogDiv = styled.div`
background-color: lightblue;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const BoxDog = styled.section`
  border: 2px solid aqua;
  border-radius: 7px;
  width: 70%;
  height: 87vh;
  flex-direction: column;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`
export const BtnDog = styled.button`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: lighter;
  border-radius: 5px;
  padding: 1.2vh 2vw;
  width: 30%;
  margin: 0 auto;
  border: 1px solid aqua;

  :active{
    border: none;
  }
  :hover{
    background-color: aqua;
  }
`
export const BtnHome = styled.button`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: lighter;
  border-radius: 5px;
  padding: 1.2vh 2vw;
  margin: 0 auto;
  border: 1px solid aqua;

  :active{
    border: none;
  }
  :hover{
    background-color: aqua;
  }
`
export const Figure = styled.figure`
  width: 50vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    max-height: 40vh;
    max-width: 50vw;
  }
`