import React, {useContext} from "react";

import { StyledTaskContainer, StyledTask, StyledTaskInput, StyledDltButton, StyledTaskSpan  } from "./styledComponents/TaskContainer.Styled";
import { mode } from "./Context";

function Task(props){
    const { index,filteredtask, removetask,changeStatus}= props

    const {isDark} = useContext(mode)
    function handleCheckboxChange(){
        changeStatus(filteredtask[index].name)
    }
    
    return(
        <StyledTaskContainer>
        <StyledTask isdark={isDark}>
            <StyledTaskInput type="checkbox" checked = {filteredtask[index].status} onChange={handleCheckboxChange}/>
            <StyledTaskSpan isCompleted= {filteredtask[index].status}>{filteredtask[index].name}</StyledTaskSpan>
        </StyledTask>
        <StyledDltButton onClick={()=>removetask(index,filteredtask)}>Delete</StyledDltButton>
        </StyledTaskContainer>
    )
}
export default Task