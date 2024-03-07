import React from "react"
import './form.css'
import { TodoContext } from "../TodoContext";

function TodoForm()
    {
        const {setOpenModal, addTodo} = React.useContext(TodoContext);
        const [newTodoValue, setNewTodoValue] = React.useState('')

        function onSubmit (event) {
            event.preventDefault();
            addTodo(newTodoValue)
            setOpenModal(false);

        }

        function onChange(event) {
            setNewTodoValue(event.target.value)
          }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Acomodar la cama"/>
            <div id="button-container-box">
            <button className="todoForm-button cancell-button">Cancel</button>
            <button className="todoForm-button add-button">Create</button>
            </div>
        </form>
    )
}

export {TodoForm}