import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const localStorageTodos = localStorage.getItem(itemName);

    let parsedItem;

   setTimeout(()=>{
    try{
      if (!localStorageTodos) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageTodos);
        setItem(parsedItem)
      }
  
      setLoading(false);
    }catch(error){
      setLoading(false)
      setError(true)
    }
   }, 2000)
  }, []);

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItems, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el Curso de Intro a React.js", completed: false },
//   { text: "Llorar con la Llorona", completed: false },
//   { text: "LALALALALA", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));