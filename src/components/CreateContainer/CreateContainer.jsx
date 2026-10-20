import { useState } from 'react';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';
import classes from './CreateContainer.module.css';

const CreateContainer = ({createTask}) => {
    const [isEditing, setIsEditing] = useState(true);
    const [textValue, setTextValue] = useState('');
    const MAX_LENGTH = 108;

    function editingTextBtn() {
        if(!isEditing && textValue.trim()) {
            createTask(textValue);
            setTextValue('');
            setIsEditing(!isEditing);
        } else {
            setIsEditing(false);
        }
        
    }



    return (
        <div className={classes.createContainer}>
            
            <div className={classes.btnContainer}>
                    <CreateTaskButton background={"rgb(110, 205, 110)"}  title={isEditing ? 'Вписать новое задание' : 'Добавить задание'} onClick={editingTextBtn} />
                {!isEditing && (
                    <CreateTaskButton  background={"rgb(245, 79, 46)"} title='Отменить ввод' onClick={() => setIsEditing(true)} />
                )}
            </div>
            
            <textarea
                className={`${classes.textTask} ${isEditing ? classes.textNone : ''}`} 
                value={textValue} onChange={(event) => {setTextValue(event.target.value)}}
                placeholder='Введите новое задание (максимум 108 символов)' maxLength={MAX_LENGTH}
            >    
            </textarea>

            {!isEditing && (
                <div className={classes.counter}>
                    Осталось символов: {MAX_LENGTH - textValue.length}/{MAX_LENGTH}
                </div>
            )}

        </div>
    )
}

export default CreateContainer;