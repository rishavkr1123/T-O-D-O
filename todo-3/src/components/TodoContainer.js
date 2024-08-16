import React, {useState} from 'react'
import Task from './Task'
import  taskList  from '../utils/MockData'
import { 
    StyledTodoContainer, 
    StyledToDoContainerHeader, 
    StyledInputContainer, 
    StyledInput,
    StyledButton,
    StyledSearchContainer, 
    StyledSearchButton, 
    FilterToDoContainer,
    StyledSortButton,
    FilterContainer,
    FilterContainerLabel,
    FilterContainerSelect

} from './styledComponents/ToDoContainers.Styled'


function TodoContainer(props) {
    let[task,setTask] = useState(taskList)
    let [filteredTask, setFilteredTask] = useState(taskList)
    let [inputField, setInputField]= useState("")
    let [searchField, setSearchField]= useState("")
    let [filter, setFilter] = useState("All")
    
    let {isdark, onThemeChange}= props
    const themeIconPath = isdark? "/images/icon-sun.svg": "/images/icon-moon.svg";

    function findIndex(val, arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i].name===val) return i;
        }
    }
    function callChangeStatus(ind, arr){
        const newStatus= !arr[ind].status
        const updatedTasks = arr.map((val, i) =>
            i === ind
              ? { ...val, status: newStatus } // Update the task if index matches
              : val// Return the task unchanged otherwise
          );
        return updatedTasks

    }
    function changeStatus(val){
        let ind1= findIndex(val,task)
        let ind2 = findIndex(val,filteredTask)
        setTask(callChangeStatus(ind1,task))
        setFilteredTask(callChangeStatus(ind2,filteredTask))

    }
    
    
    function addTasks(){
        const modifiedTask = (inputField!="")?[...task,{name:inputField, status: false}]: task;
        setTask(prevtask=>modifiedTask)
        setFilteredTask(modifiedTask)
        setInputField("")

    }
    function handleThemeChange(){
        onThemeChange()

    }
    function handleinputChange(e){
        setInputField(e.target.value)
    }
    function handlesearchChange(e){
        setSearchField(e.target.value)
    }
    function removeTask(ind,arr){
        const objTobeDeleted = arr[ind]
        const modifiedfilteredTask = filteredTask.filter((val,index)=> val.name!== objTobeDeleted.name)
        const modifiedTask = task.filter((val)=> val.name!== objTobeDeleted.name)

        setTask(prevtask=> modifiedTask)
        setFilteredTask(prevtask=>modifiedfilteredTask )

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          addTasks();
        }
      };
    function handleSearchKeyDown(e){
        if (e.key === 'Enter') {
            handleSearch();
          }

    }
    function handleSearch(){
        const searchedTask = filteredTask.filter((val,index)=> val.name.toLowerCase().includes(searchField.toLowerCase()))
        console.log(searchedTask)
        setFilteredTask(prevTask=> searchedTask )
    }
    function handleSorting(){
        console.log("sorting")
        const Sortedtask = filteredTask.toSorted(
            (a,b)=> a.name.localeCompare(b.name)

        )
        console.log(Sortedtask)
        
        setFilteredTask(prevTask=> Sortedtask)

    }

    const alltasks = filteredTask.map((val,index)=> <Task isdark= {isdark} index= {index} key={index} filteredtask={filteredTask}  removetask= {removeTask} changeStatus={changeStatus} />)
    const completed = filteredTask.filter((val,i)=> val.status===true)
    const completedTasks = completed.map((val,index)=> <Task  isdark= {isdark} index= {index} key={index} filteredtask={completed}  removetask= {removeTask} changeStatus={changeStatus} />)
    const uncompleted = filteredTask.filter((val,i)=> val.status===false)
    const uncompletedTasks = uncompleted.map((val,index)=> <Task isdark= {isdark} index= {index} key={index} filteredtask={uncompleted}  removetask= {removeTask} changeStatus={changeStatus} />)


    return (
    <StyledTodoContainer>
        <StyledToDoContainerHeader>
            <h1>T O D O</h1>
            <img src = {themeIconPath} className="" onClick = {handleThemeChange}/>
        </StyledToDoContainerHeader>
        
        <StyledInputContainer>
            <StyledInput type='text' placeholder='Add your task...' value = {inputField} onChange={handleinputChange} onKeyDown={handleKeyDown}/>
            <StyledButton onClick={addTasks}>Add</StyledButton>
        </StyledInputContainer>
        <StyledSearchContainer>
            <StyledInput type='text' placeholder='Search your task...' value = {searchField} onChange={handlesearchChange} onKeyDown={handleSearchKeyDown}/>
            <StyledSearchButton onClick={handleSearch}>Search</StyledSearchButton>
        </StyledSearchContainer>
        <FilterToDoContainer>
            <StyledSortButton onClick={handleSorting}>Sort</StyledSortButton>
            <FilterContainer>
                <FilterContainerLabel htmlFor="tasks">Filter:
                <FilterContainerSelect name="tasks" id="tasks" value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </FilterContainerSelect>
                </FilterContainerLabel>
            </FilterContainer>
            
        </FilterToDoContainer>
        {(filter==="All")?alltasks:((filter==="Completed")? completedTasks:uncompletedTasks)}
    </StyledTodoContainer>
  )
}

export default TodoContainer
