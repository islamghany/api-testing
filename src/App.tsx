import React from 'react';
import styled,{ThemeProvider} from 'styled-components'
import {theme} from './utils/theme'
import GlobalStyle from './utils/globalStyle';

const ButtonComp = styled.button`
  padding:1rem 2rem;
  background:${({theme})=>theme.colors.primary[1]};
  color:${({theme})=>theme.colors.light[4]};
  border:none;
  border-radius:.4rem;
  cursor: pointer;
  outline:none;
  transition:background .3s ease;
  margin:1rem;
  font-size:1.6rem;
  &:hover{
   background:${({theme})=>theme.colors.primary[0]};
  }
  &:active{
    background:${({theme})=>theme.colors.primary[1]};
  }
`

const Button:React.FC = ({children})=>{
  return <ButtonComp>
   {children}
  </ButtonComp>
}
function App() {
  const checkFetch= async  ()=>{
    try{
      const res = await fetch('http://localhost:5000');
      const resData = await res.json();
      console.log(resData);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <div className="App">
      <Button>
        check
      </Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
