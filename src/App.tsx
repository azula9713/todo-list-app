import React, { ChangeEvent, Fragment, useState } from "react";
import { ToDoForm } from "./Components/TodoForm";
import { ToDoList } from "./Components/TodoList";
import { TodoInterface } from "./interface";
import "./Styles.scss";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  function handleTodoCreate(todo: TodoInterface) {
    const newTodoState: TodoInterface[] = [...todos];
    newTodoState.push(todo);
    setTodos(newTodoState);
  }

  //Update
  function handleTodoUpdate(event: ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.name =
      event.target.value;

    setTodos(newTodosState);
  }

  //Delete
  function handleTodoDelete(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );
    setTodos(newTodosState);
  }

  //Check Completed
  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;

    setTodos(newTodosState);
  }

  return (
    <div className="App">
      <Fragment>
        <h2>On The Go To-Do App</h2>
        <ToDoForm todos={todos} handleCreate={handleTodoCreate} />
        <ToDoList
          todos={todos}
          handleUpdate={handleTodoUpdate}
          handleComplete={handleTodoComplete}
          handleDelete={handleTodoDelete}
        />
      </Fragment>
    </div>
  );
};

export default App;
