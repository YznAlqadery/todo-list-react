import { useState } from "react";

export function ToDoItem({ todo, number, deleteTodo }) {
  const [isFinished, setIsFinished] = useState(false);
  return (
    <div className={isFinished ? "todo-item finished" : "todo-item"}>
      <li> {todo} </li>
      <div className="buttons">
        <button className="delete-btn" onClick={() => deleteTodo(number)}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <button
          className="finish-btn"
          onClick={() => setIsFinished((isFinished) => !isFinished)}
        >
          {isFinished ? (
            <i class="fa-solid fa-circle-xmark"></i>
          ) : (
            <i className="fa-solid fa-check"></i>
          )}
        </button>
      </div>
    </div>
  );
}
