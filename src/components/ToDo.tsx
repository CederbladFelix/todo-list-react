import type { ReactElement } from "react";

interface ToDoProps {
  id: number;
  done: boolean;
  description: string;
  onToggle: (id: number) => void;
  onTrashIconClick: (id: number) => void;
}

export const ToDo = ({
  id,
  done,
  description,
  onToggle,
  onTrashIconClick,
}: ToDoProps): ReactElement => {
  return (
    <div className={`todo-container ${done ? "done" : ""}`}>
      <p>{id}</p>
      <p>{description}</p>
      <div className="todo-button-container">
        <span
          onClick={() => onTrashIconClick(id)}
          className="material-symbols-outlined"
        >
          delete
        </span>
        <input
          type="checkbox"
          checked={done}
          onChange={() => onToggle(id)}
        ></input>
      </div>
    </div>
  );
};
