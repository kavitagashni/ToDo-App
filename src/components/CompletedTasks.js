function CompletedTask(props) {
    return (
        <div className="completed-task">
            <h3 className="task-list-header">completed Tasks</h3>
            {props.task2.map((completedItem, i) => {
                return (<div className="tast-list-item" key={i}>
                    <img src="/assets/undo.png" onClick={()=> props.undo(i)}/>
                    <p className="completed-task-name">{completedItem}</p>
                    <img className="delete-img" src="/assets/delete.png" onClick={() => props.delete(i, "abc ")}/>
                </div>)
            })}
        </div>

    )
}

export default CompletedTask;