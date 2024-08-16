import styled from 'styled-components'

import { StyledButton } from './ToDoContainers.Styled'
export const StyledTaskContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 40px;
    margin-bottom: 2px;
`

export const StyledTask = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 20px;
    background-color: aliceblue;
    width: 400px;
    padding-left: 5px;

`
export const StyledTaskInput = styled.div`
    border: 1px solid hsl(234, 11%, 52%);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 10px;

`
export const StyledDltButton = styled(StyledButton)`
    font-size: 20px;
    background-color: rgb(179, 175, 175);

`