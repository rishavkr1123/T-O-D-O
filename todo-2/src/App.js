import React, {useState} from 'react'
import TodoContainer from "./components/TodoContainer";
import { StyledHeader } from './components/styledComponents/Header.Styled';
import { StyledBody } from './components/styledComponents/Body.Styled';

function App() {
  let [isDark, setIsDark] = useState(true); /// state lifting

  const handleThemeChange = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };
  return (
    <>
      <StyledHeader isDark = {isDark}/> 
      <StyledBody>
        <TodoContainer isdark={isDark} onThemeChange={handleThemeChange}/>
      </StyledBody>
    </>
  );
}

export default App;
