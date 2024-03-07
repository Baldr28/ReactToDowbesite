import React from 'react';
import './TodoSearch.css'

function TodoSearch(){
    const {searchValue, setsearchValue} = React.useContext(TodoContext)
return(
      <input placeholder="Cortar Cebolla" 
      onChange={(event) => {
       setsearchValue(event.target.value);
      }}
      
      value={searchValue}/>
      );
  }

  export { TodoSearch }