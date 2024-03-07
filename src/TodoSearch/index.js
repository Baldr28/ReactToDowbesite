import React from 'react';
import './TodoSearch.css'

function TodoSearch({
    searchValue,
    setsearchValue
}){

return(
      <input placeholder="Cortar Cebolla" 
      onChange={(event) => {
       setsearchValue(event.target.value);
      }}
      
      value={searchValue}/>
      );
  }

  export { TodoSearch }