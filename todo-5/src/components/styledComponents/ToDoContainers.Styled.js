import styled from "styled-components";


export const StyledTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: -230px auto 0 auto;
`

export const StyledToDoContainerHeader = styled.div`
    display: flex;           
    align-items: center;    
    justify-content: space-between; 
    margin-top: 0; 

     h1{
        margin: 0; 
        color: white;   
    }
    img{
        cursor: pointer; 
    }
`

export const StyledInputContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin-bottom: 30px;

`
export const StyledSearchContainer = styled(StyledInputContainer)`
    margin-top: -15px;

`
export const StyledInput = styled.input`
    height: 40px;
    width: 400px;
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    font-size: 20px;

`
export const StyledButton= styled.button`
    height: 40px;
  width: 75px;
  border-radius: 5px;
  font-size: 25px;
  background-color: rgb(174, 103, 241);
  border: none;
  cursor: pointer;

`
export const StyledSearchButton= styled(StyledButton)`
   font-size: 20px;
`

export const FilterToDoContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 5px 0 5px 10px; 
    margin-top: -15px;
    align-items:center;
`
export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
`
export const FilterContainerLabel = styled.label`
    margin-right: 10px;
    font-size: 25px;
    color: white;
`
export const FilterContainerSelect = styled.select`
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
`
export const StyledSortButton = styled(StyledButton)`

`
