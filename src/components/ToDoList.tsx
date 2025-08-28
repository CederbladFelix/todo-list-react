import { type ReactElement } from "react";
import type { ToDoArrayProps } from "../types";
import { ToDo } from "./ToDo";

export const ToDoList = ({
  toDoArray,
  setToDoArray,
}: ToDoArrayProps): ReactElement => {
  const handleToggle = (id: number) => {
    setToDoArray((prev) =>
      prev.map((toDo) =>
        toDo.id === id ? { ...toDo, done: !toDo.done } : toDo
      )
    );
  };

  const handleTrashIconClick = (id: number) => {
    setToDoArray((prev) => prev.filter((toDo) => toDo.id !== id));
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
            onTrashIconClick={handleTrashIconClick}
          />
        );
      })}
    </div>
  );
};
