import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          todo={todo}
          key={index + 1}
          number={index + 1}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
