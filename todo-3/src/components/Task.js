import React from "react";

import { StyledTaskContainer, StyledTask, StyledTaskInput, StyledDltButton, StyledTaskSpan  } from "./styledComponents/TaskContainer.Styled";

function Task(props){
    const {isdark, index,filteredtask, removetask,changeStatus}= props
    function handleCheckboxChange(){
        changeStatus(filteredtask[index].name)
    }
    
    return(
        <StyledTaskContainer>
        <StyledTask isdark={isdark}>
            <StyledTaskInput type="checkbox" checked = {filteredtask[index].status} onChange={handleCheckboxChange}/>
            <StyledTaskSpan isCompleted= {filteredtask[index].status}>{filteredtask[index].name}</StyledTaskSpan>
        </StyledTask>
        <StyledDltButton onClick={()=>removetask(index,filteredtask)}>Delete</StyledDltButton>
        </StyledTaskContainer>
    )
}
export default Task