import './TodoCounter.css'
import { TodoContext } from "../TodoContext";
import React from 'react';
const estilos ={
  fontSize: '24px',
  textAlign: 'center',
  margin: '0px',
  padding: '48px',
  color: '#ffff',
  fontWeight: 'bolder',
}

function TodoCounter({total, completed}) {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)
    return (
      <h2 style={estilos}>
        Has completado {completedTodos} de {totalTodos} ToDos
      </h2>
      );
  }

  export { TodoCounter}