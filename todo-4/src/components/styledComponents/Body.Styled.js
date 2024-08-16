import styled from 'styled-components'




export const StyledBody = styled.div`
    display: flex;       
    justify-content: center;
    background-color: ${({ isdark }) => (isdark ? 'hsl(235, 24%, 19%);' : 'white')};
    min-height: 100vh;
`