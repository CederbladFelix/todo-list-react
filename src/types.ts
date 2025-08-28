export interface ToDoType {
  id: number;
  done: boolean;
  description: string;
  author: string;
  timestamp: Date;
}

export interface ToDoArrayProps {
  toDoArray: ToDoType[];
  setToDoArray: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}

export interface nextIdProps {
  nextId: number;
  setNextId: React.Dispatch<React.SetStateAction<number>>;
}
