import './TodoItem.css'

function TodoItem() {
    return (
      <li className="TodoItem">
        <span className="Icon Icon-check--item span icon-item-container-colour">v</span>
        <span className="span"><p id="text">Llorar con la Llorona</p></span>
        <span className="span icon-item-container-colour" id="close">x</span>
      </li>
    );
  }


  export {TodoItem}