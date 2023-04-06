import './App.css';
import TaskList from "./components/TaskList";
import CompletedTask from "./components/CompletedTasks";
import { useState } from 'react';
import completedTask from './components/CompletedTasks';

function App() {
  const [data, setData] = useState("");
  const [array, setarray] = useState([]);
  const [taskComplete, settaskComplete] = useState([]);
  const [clickedInput, setclickedInput] = useState("");
  const [newInputValue, setnewInputValue] = useState("");


  function getNewValue(event) {
    setnewInputValue(event.target.value)
    console.log("rashi" + newInputValue)
  }

  function handleChange(event) {
    console.log('event = ', event)
    setData(event.target.value);
  }

  function btnclick() {
    setarray([...array, data]);
    setData("")
  }


  //  dalete task for taskList or Complete Task..............
  function deleteTask(id, listType) {
    if (listType == "xyz") {
      if (window.confirm("Are you sure you want to delete Task?")) {
        const newList = array.filter((ele, i) => id !== i)
        setarray(newList)
      }
    }
    else {
      if (window.confirm("Are you sure you want to delete Task?")) {
        const newList = taskComplete.filter((ele, i) => id !== i)
        settaskComplete(newList)
      }
    }
  }




  // click on checkbox........
  function checkboxClick(id) {
    const checkList = array.filter((ele, i) => {
      return id !== i
    })
    setarray(checkList)

    const ditList = array.filter((del, i) => { return id == i })
    settaskComplete([...taskComplete, ...ditList]);

  }

  // function fot undo from 
  const undofunction = (id) => {
    var backItem = taskComplete.filter((ele, i) => {
      return id !== i
    })
    settaskComplete(backItem)


    var undoItem = taskComplete.filter((ele, i) => {
      return id == i
    })
    setarray([...array, ...undoItem])
  }


  // change in input feild in TaskList component 

  function clicked(id) {
    setclickedInput(id)
  }


  // function for tick click..........

  function dubbleClicked(id) {
    var newValueArray = [...array]
    console.log("abs" + newInputValue)
    newValueArray[id] = newInputValue
    setarray(newValueArray)
    setclickedInput("")
  }




  return (
    <div className="App">
      <h1 className="app-header">Welcome to your To-Do List</h1>
      <div className="container">
        <div className="add-task">
          <input type="text" className="display" value={data} onChange={handleChange} placeholder="Add a new task" />
          <button className='add' onClick={btnclick}>Add</button>
        </div>
        <div>
          <TaskList task1={array} delete={deleteTask} checkbox={checkboxClick} editClick={clicked} saveClick={dubbleClicked} clickOnInput={clickedInput} getNewValue={getNewValue} />
          <CompletedTask task2={taskComplete} undo={undofunction} delete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
