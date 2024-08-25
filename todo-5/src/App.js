import React, {useState} from 'react'
import TodoContainer from "./components/TodoContainer";
import { StyledHeader } from './components/styledComponents/Header.Styled';
import { StyledBody } from './components/styledComponents/Body.Styled';
import { mode } from './components/Context';
import { GlobalStyle } from './components/styledComponents/Global.styled';

function App() {
  let [isDark, setIsDark] = useState(true); 
  

  const handleThemeChange = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };
  return (
    <>
    <GlobalStyle/>
     <mode.Provider value= {{isDark, handleThemeChange}}>
      <StyledHeader isDark = {isDark}/> 
      <StyledBody isdark={isDark} > 
        <TodoContainer/>
      </StyledBody>
      </mode.Provider>
      
    </>
  );
}

export default App;
