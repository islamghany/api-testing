import React from 'react';
import styled,{ThemeProvider} from 'styled-components'
import {theme} from './utils/theme'
import GlobalStyle from './utils/globalStyle';
import {Button} from  'rsuite'

const ButtonComp = styled(Button)`
  padding:1rem 2rem;
  background:${({theme})=>theme.colors.primary[1]};
  color:${({theme})=>theme.colors.light[4]};
  border:none;
  border-radius:.4rem;
  cursor: pointer;
  transition:background .3s ease;
  margin:1rem;
  font-size:1.6rem;
  &:hover{
   background:${({theme})=>theme.colors.primary[0]} !important;
   color:${({theme})=>theme.colors.light[4]} !important;
  }
  &:active{
    background:${({theme})=>theme.colors.primary[1]} !important;
  }
  &:focus{
    background:${({theme})=>theme.colors.primary[1]} !important;
     color:${({theme})=>theme.colors.light[4]} !important;
  }
`

const ButtonContainer:React.FC = ({children})=>{
  return <ButtonComp>
   {children}
  </ButtonComp>
}
function App() {
  // const checkFetch= async  ()=>{
  //   try{
  //     const res = await fetch('http://localhost:5000');
  //     const resData = await res.json();
  //     console.log(resData);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <div className="App">
      <ButtonContainer>
        check
      </ButtonContainer>
    </div>
    </ThemeProvider>
  );
}

export default App;
