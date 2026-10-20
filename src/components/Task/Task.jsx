import classes from './Task.module.css';


const Task = ({text, isComplete}) => {
    return (
        <div className={`${classes.task} ${isComplete ? classes.completed : ''}`}>
            
            {text}
        </div>
    )
}


export default Task;