import classes from './CompleteTask.module.css';

const CompleteTask = (props) => {
    return (
        <div className={classes.checkboxContainer}>
            <input 
            accent-color="green" 
            className={classes.checkbox} 
            type="checkbox"
            checked={props.complete}
            onChange={props.onToggle}
            />
            <label className={classes.text}>
                {(props.complete) ? 'Выполнено' : 'Отметить выполнение'}
            </label>
            
        </div>
    )
}

export default CompleteTask;