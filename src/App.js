import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodo] = useState(["sample1", "sample2"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="Add New TODO!" />
        <button>ADD</button>
      </div>
      <div className="incomplete-area">
        <p className="title">Incomplete TODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>COMPLETE</button>
                  <button>DELETE</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">Compeleted TODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>sample</p>
              <button>RETURN</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
