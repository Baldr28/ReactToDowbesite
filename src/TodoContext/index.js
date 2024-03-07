import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setsearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);


  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  console.log("Log 1");

  React.useEffect(() => {
    console.log("Log 2");
  }, [totalTodos]);
  console.log("Log 3");

  const searchedTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  const addTodo = (text)=>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos)
  }

  const TodoComplete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const TodoDelete = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setsearchValue,
        searchedTodo,
        completedTodos,
        TodoDelete,openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
