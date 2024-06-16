import { useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { ToDoList } from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  function deleteTodo(number) {
    setTodos((todos) => todos.filter((todo, index) => index !== number - 1));
  }
  return (
    <div className="container">
      <TodoInput todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
