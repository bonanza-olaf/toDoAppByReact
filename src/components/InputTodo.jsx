import React from "react";

const style = {
  backgroundColor: "#ffb300",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "6px",
  borderRadius: "5px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="Add New TODO!"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        ADD
      </button>
    </div>
  );
};
