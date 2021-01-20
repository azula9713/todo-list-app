import React from "react";
import { TodoItemInterface } from "../interface";
import { Input } from "antd";
import { FaTrash } from "react-icons/fa";

export const TodoItem: React.FC<TodoItemInterface> = ({
  handleComplete,
  handleDelete,
  handleUpdate,
  todo,
}) => {
  return (
    <div className="todo-item border flex p-2">
      <div onClick={() => handleComplete(todo.id)}>
        {todo.isCompleted ? (
          <span className="todo-item-checked">✔️</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      <div className="todo-item-input-wrapper">
        <Input
          value={todo.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(event, todo.id)
          }
        />
      </div>
      <div
        className="flex pr-2 pl-2 text-red-500"
        onClick={() => handleDelete(todo.id)}
      >
        <FaTrash />
      </div>
    </div>
  );
};
