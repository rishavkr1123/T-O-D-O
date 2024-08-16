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
    FilterContainer 
} from './styledComponents/ToDoContainers.Styled'


function TodoContainer(props) {
    let[task,setTask] = useState(taskList)
    let [filteredTask, setFilteredTask] = useState(taskList)
    let [inputField, setInputField]= useState("")
    let [searchField, setSearchField]= useState("")
    let [comptasks, setComptasks] = useState(new Map())
    let {isdark, onThemeChange}= props
    const themeIconPath = isdark? "/images/icon-sun.svg": "/images/icon-moon.svg";


    function updateCompletedTasks(key){
        setComptasks(prevTask=> newMap(comptasks).set(key,1));

    }

    function completeToUncomplete(key){
        setComptasks(
            prevTask => {
                const newMap = new Map(prevMap);
                newMap.delete
            }
        )

    }
    
    function addTasks(){
        const modifiedTask = (inputField!="")?[...task,inputField]: task;
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
    function removeTask(ind){
        const modifiedTask = task.filter((val,index)=> index!=ind)
        setTask(prevtask=> modifiedTask)
        setFilteredTask(prevtask=>modifiedTask)

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
        const searchedTask = filteredTask.filter((val,index)=> val.toLowerCase().includes(searchField.toLowerCase()))
        console.log(searchedTask)
        setFilteredTask(prevTask=> searchedTask )
    }
    function handleSorting(){
        console.log("sorting")
        const Sortedtask = filteredTask.toSorted()
        console.log(Sortedtask)
        
        setFilteredTask(prevTask=> Sortedtask)

    }
    const tasks = filteredTask.map((val,index)=> <Task index= {index} key={index} filteredtask={filteredTask}  removetask= {removeTask}/>)
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
                <label htmlFor="tasks">Filter:</label>
                <select name="tasks" id="tasks">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </FilterContainer>
            
        </FilterToDoContainer>
        
        
        {tasks}
    </StyledTodoContainer>
  )
}

export default TodoContainer
