import styled from 'styled-components'




export const StyledHeader = styled.div`
     background: ${({ isDark }) => isDark 
    ? "url('/images/bg-desktop-dark.jpg')" 
    : "url('/images/bg-desktop-light.jpg')"};
    background-repeat: no-repeat;
    background-size: cover;
    height: 40vh;
`
