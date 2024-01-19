import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

function App() {
  return (
   <React.Fragment>

      <TodoCounter completed={16} total={55} />
      <TodoSearch />
      <TodoList> 
        <TodoItem />

        <TodoItem />

        <TodoItem />

        <TodoItem />
        <TodoItem />

        <TodoItem />

        <TodoItem />

        <TodoItem />
       
    </TodoList>

     <CreateTodoButton />
     </React.Fragment>
  );
}


export default App;
