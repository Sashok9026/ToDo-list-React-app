import classes from './DeleteButton.module.css';

const DeleteButton = (props) => {
  return (
    <button onClick={props.onDelete} className={`${classes.deleteButton} ${props.className}`} aria-label="Удалить">     


    </button>
  );
}

export default DeleteButton;