import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodo] = useState([]);
  const [completeTodos, setCompleteTodo] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodo(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodo(newIncompleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodo(newCompleteTodos);
    setIncompleteTodo(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Add New TODO!"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>ADD</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incomplete TODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>
                    COMPLETE
                  </button>
                  <button onClick={() => onClickDelete(index)}>DELETE</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Compeleted TODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>RETURN</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
