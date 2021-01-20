export interface TodoInterface {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleCreate: (todo: TodoInterface) => void;
}

export interface TodoListInterface {
  handleUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleDelete: (id: string) => void;
  handleComplete: (id: string) => void;
  todos: TodoInterface[];
}

export interface TodoItemInterface {
  handleUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleDelete: (id: string) => void;
  handleComplete: (id: string) => void;
  todo: TodoInterface;
}
