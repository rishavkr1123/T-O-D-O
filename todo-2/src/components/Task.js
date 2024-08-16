import React, {useState} from "react";

import { StyledTaskContainer, StyledTask, StyledTaskInput, StyledDltButton  } from "./styledComponents/TaskContainer.Styled";

function Task(props){
    let [isChecked, setisChecked] = useState(false)
    const {index,filteredtask, removetask}= props
    
    function handleCheckboxChange(){
        setisChecked(!isChecked)
        
    }
    
    return(
        <StyledTaskContainer>
        <StyledTask>
            <StyledTaskInput type="checkbox" checked = {isChecked} onChange={handleCheckboxChange}/>
            <span>{filteredtask[index]}</span>
        </StyledTask>
        <StyledDltButton onClick={()=>removetask(index)}>Delete</StyledDltButton>
        </StyledTaskContainer>
    )
}
export default Task