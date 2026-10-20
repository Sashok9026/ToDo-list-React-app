import classes from './TaskButton.module.css';

const CreateTaskButton = (props) => {

    return (
        <button style={{background: props.background}} className={classes.button} onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default CreateTaskButton;