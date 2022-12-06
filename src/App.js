import './App.css';
import TaskList from "./components/TaskList";
import CompletedTask from "./components/CompletedTasks";
import SecondComp from "./components/PrecticeTask";
import { useState } from 'react';
import completedTask from './components/CompletedTasks';

function App() {
  const [data, setData] = useState("");
  // const [updated, setUpdated] = useState("");
  const [array, setarray] = useState([]);
  const [taskComplete, settaskComplete] = useState([]);
  // const [imp, setInp] = useState([]);
  const [clickedInput, setclickedInput] = useState("");
  const [newInputValue, setnewInputValue] = useState("");

  // event khud hi as a perameter ata hai hmko bo recive krna hot hota hai jaise niche kiya hai(event). 
  // ab target.value mai puri ki puri input field agyi haior agr hm isme .value lgate hai mtlb event.target.value mai input field mai jo text likha hai bo agyi hoti hai.
  //  event ek object hota hai yani key or value.
  function getNewValue(event) {
    setnewInputValue(event.target.value)
    console.log("rashi" + newInputValue)
  }

  function handleChange(event) {
    console.log('event = ', event)
    setData(event.target.value);
  }

  // jo setdata likha hai data ek variable name hai or us variable mai hm jo bhi (event.taget.value)
  // mai mtlb jo input mai text hai bo set kr rhe hai fir button click krne pr maine ise aleet krvaya hai.
  // .................................................................................
  //  setUpdate hmnse ek or state li hai uper kyuki hme 2 jgah pr changes krne hai hai  isle 2 state use krte hai
  // jo input mai hm likhtre hai usko data  bala variable mai store kiya fir jb btn click kiya to
  //  mujhe bo update variable mai dalna hai ab 2nd state kam kregi to data ki value SetUpdate mai daal di 
  // jaise ki niche likha hai fir ise tasklist mai ek naya variable se lena hai taki bo task list mai dikhe.
  function btnclick() {
    setarray([...array, data]);
    setData("")
  }


  //  dalete task for taskList or Complete Task..............
  function deleteTask(id, listType) {
    if (listType == "xyz"){
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
    settaskComplete([...taskComplete, ...ditList])

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
    // console.log("id:-" + id)
    setclickedInput(id)
  }


  // function for tick click..........

  function dubbleClicked(id) {
    // console.log("i dclicked"+ id)
    var newValueArray = [...array]
    console.log("abs" + newInputValue)
    newValueArray[id] = newInputValue
    //  console.log("abc@:-"+ newEditValue)
    setarray(newValueArray)
    setclickedInput("")
    // console.log("kavita="+ newEditValue)
  }




  return (<div className="App">
    <h1 className="app-header">Welcome to your To-Do List</h1>
    <div className="container">
      <div className="add-task">
        <input type="text" className="display" value={data} onChange={handleChange} placeholder="Add a new task" />
        <button className='add' onClick={btnclick}>Add</button>
      </div>
      <div className='tasks-row'>
        <TaskList task1={array} delete={deleteTask} checkbox={checkboxClick} editClick={clicked} saveClick={dubbleClicked} clickOnInput={clickedInput} getNewValue={getNewValue} />
        <CompletedTask task2={taskComplete} undo={undofunction} delete={deleteTask} />
        <SecondComp />
      </div>
    </div>
  </div>
  );
}

export default App;