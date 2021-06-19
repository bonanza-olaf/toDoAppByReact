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
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="Add New TODO!" value={todoText} onChange={onChange} />
      <button onClick={onClick}>ADD</button>
    </div>
  );
};
