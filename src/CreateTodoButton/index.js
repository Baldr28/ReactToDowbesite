import "../CreateTodoButton/";
import React from "react";

const CreateToDOButtonStyle = {
  background: " #33310a",
  height: "75px",
  width: "75px",
  border: "none",
  fontSize: "45px",
  padding: "0px",
  color: "#fff",
  borderRadius: "50px",
  position: "fixed",
  bottom: 0,
  marginBottom: "12px",
  // transform: [{rotate: '45deg'}],
};

function CreateTodoButton({ onOpenModal, setOpenModal }) {
  return (
    <button
      id="btn"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
      style={CreateToDOButtonStyle}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
