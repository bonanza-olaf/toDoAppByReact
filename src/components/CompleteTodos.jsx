import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">Compeleted TODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClick(index)}>RETURN</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
