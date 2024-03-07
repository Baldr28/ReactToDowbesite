import "./TodoItem.css";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check--item span icon-item-container-colour ${
          props.completed && "active-icon"
        }`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <span className={`span ${props.completed && "active"} `}>
        <p id="text">{props.text}</p>
      </span>
      <span className="span icon-item-container-colour" id="close"
      onClick={props.onDelete}
      >
        <MdCancel />

      </span>
    </li>
  );
}

export { TodoItem };
