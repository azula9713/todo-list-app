import React from "react";
import { TodoListInterface } from "../interface";
import { TodoItem } from "./TodoItem";

export const ToDoList: React.FC<TodoListInterface> = ({
  handleComplete,
  handleDelete,
  handleUpdate,
  todos,
}) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
