import { useState, type ReactElement } from "react";
import type { ToDoType } from "../types";
import { ToDo } from "./ToDo";
import { toDoListData } from "./Data";

export const ToDoList = (): ReactElement => {
  const [toDoArray, setToDoArray] = useState<ToDoType[]>(toDoListData);

  const handleToggle = (id: number) => {
    setToDoArray((prev) =>
      prev.map((toDo) =>
        toDo.id === id ? { ...toDo, done: !toDo.done } : toDo
      )
    );
  };

  return (
    <div id="todo-list-container">
      {toDoArray.map((toDo) => {
        return (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            description={toDo.description}
            done={toDo.done}
            onToggle={handleToggle}
          />
        );
      })}
    </div>
  );
};
