import { Input } from "antd";
import React, { ChangeEvent, useRef, useState } from "react";
import shortid from "shortid";
import { TodoInterface, TodoFormInterface } from "../interface";

export const ToDoForm: React.FC<TodoFormInterface> = ({
  handleCreate,
  todos,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValues(event.target.value);
  }

  function handleInputEnter() {
    const newToDo: TodoInterface = {
      id: shortid.generate(),
      name: values,
      isCompleted: false,
    };

    handleCreate(newToDo);
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  }
  return (
    <div className="border py-4 h-14 duration-75 ease-in-out">
      <Input
        placeholder="Enter new To-Do"
        onChange={(event) => handleInputChange(event)}
        onPressEnter={handleInputEnter}
      />
    </div>
  );
};
