import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete TODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>COMPLETE</button>
                <button onClick={() => onClickDelete(index)}>DELETE</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
