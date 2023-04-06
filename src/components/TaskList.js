import { usestate } from "react";


function TaskList(props) {
    console.log(props)
    return (
        <div className="task-list">
            <h3 className="task-list-header">TaskList</h3>
            {props.task1.map((arrayItem, i) => {
                return (
                    <div className="tast-list-item" key={i}>
                        <input className="checkbox" type="checkbox" onClick={() => props.checkbox(i)} />
                        { props.clickOnInput === i?
                            <div className="input-feild">
                                <input type="text" placeholder="Add Task" defaultValue={arrayItem} onChange={props.getNewValue} />
                                <img className="done-img" src="/assets/done.png" onClick={()=>props.saveClick(i)} />
                            </div>
                            :
                            <div className="input-feild">
                                <p className="task-name">{arrayItem}</p>
                                <img className="edit-img" src="/assets/edit.png" onClick={()=>props.editClick(i)} />
                            </div>
                        }
                            <img className="delete-img" src="/assets/delete.png" onClick={() => props.delete(i, "xyz")} />
                    </div>)}
            )}
        </div>);
}
                    export default TaskList;