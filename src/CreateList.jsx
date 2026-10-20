import { useEffect, useState } from "react";
import List from "./components/List/List";
import Task from "./components/Task/Task";
import DeleteButton from "./components/DeleteButton/DeleteButton";
import CreateContainer from "./components/CreateContainer/CreateContainer";
import CompleteTask from "./components/CompleteTask/CompleteTask";


const CreateList = () => {


    const [textTask, setTextTask] = useState(() => {
        const savedTasks = localStorage.getItem("my_tasks");
        return savedTasks ? JSON.parse(savedTasks) : [ 
            {text: "Моя задача 1", complete: false},
            {text: "Моя задача 2", complete: false},
            {text: "Моя задача 3", complete: false},
        ];
    });

    

    useEffect(() => {
        localStorage.setItem("my_tasks", JSON.stringify(textTask));
    }, [textTask]);

    const deleteTask = function(indexDelete) {
        setTextTask(textTask.filter((text, index) => index !== indexDelete));
    }

    function createTask(newTask) {
            setTextTask([...textTask, {text: newTask, complete: false}]);
    }

    function toggleComplete(indexChange) {
        const newTasks = [...textTask];
        newTasks[indexChange].complete = !newTasks[indexChange].complete;
        setTextTask(newTasks);
    }

    return (
        <div>
            <List>
                {textTask.map((task, index) =>
                <div key={index} className="container-task">
                    <CompleteTask className='pushLeft' complete={task.complete} onToggle={() => toggleComplete(index)} />
                    <Task text={task.text} isComplete={task.complete} />
                    <DeleteButton className='pushRight' onDelete={() => deleteTask(index)} />
                </div>
                )}
                {(textTask.length < 10) ? <CreateContainer createTask={createTask}/> : ''}
            </List>
        </div>
    )
}

export default CreateList;