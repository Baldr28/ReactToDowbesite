import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { LoadingTodo } from "../LoadingTodo";
import { ErrorTodo } from "../ErrorTodo";
import { EmptyTodo } from "../EmptyTodo";
import React from "react";
import {Modal} from '../Modal'
import { TodoForm } from "../TodoForm";
import { TodoContext } from "../TodoContext";

function AppUi() {
  const {loading,
    error,
    searchedTodo,
    TodoComplete,
    TodoDelete,
  openModal,setOpenModal} = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter /*completed={completedTodos} total={totalTodos}*/ />
      <TodoSearch /*searchValue={searchValue} setsearchValue={setsearchValue}*/ />
      
   
          <TodoList>
          {loading && <LoadingTodo />}
          {error && <ErrorTodo />}
          {!loading && searchedTodo.length === 0 && <EmptyTodo />}
  
          {searchedTodo.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => TodoComplete(todo.text)}
              onDelete={() => TodoDelete(todo.text)}
            />
          ))}
        </TodoList>
    
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

            {openModal && (
      <Modal>
        <TodoForm 
        setOpenModal/>
      </Modal>)}

    </React.Fragment>
  );
}

export { AppUi };
