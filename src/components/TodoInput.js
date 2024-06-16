import { useState } from "react";
import { AddToDo } from "./AddToDo";

export function TodoInput({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleAdd() {
    if (todo) {
      setTodos((todos) => [...todos, todo]);
    }
    setTodo((todo) => "");
  }
  return (
    <div>
      <input
        className="todo-input"
        value={todo}
        type="text"
        placeholder="Enter todo item.."
        onChange={(e) => setTodo(e.target.value)}
      />
      <AddToDo handleAdd={handleAdd} />
    </div>
  );
}
