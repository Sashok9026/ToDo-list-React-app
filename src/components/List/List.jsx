import classes from './List.module.css';

const List = function({children}) {
    return (
        <div className={classes.list}>
            {children}
        </div>
    )

}

export default List;