import type { ReactElement } from "react";

interface ToDoProps {
  id: number;
  done: boolean;
  description: string;
  author: string;
  timestamp: Date;
  onToggle: (id: number) => void;
  onTrashIconClick: (id: number) => void;
}

export const ToDo = ({
  id,
  done,
  description,
  timestamp,
  author,
  onToggle,
  onTrashIconClick,
}: ToDoProps): ReactElement => {
  return (
    <div className={`todo-container ${done ? "done" : ""}`}>
      <p>{id}</p>
      <p className="description">{description}</p>
      <div className="todo-right-container">
        <p>{timestamp.toLocaleString()}</p>
        <p>{author}</p>
        <div className="todo-button-container">
          <input
            type="checkbox"
            checked={done}
            onChange={() => onToggle(id)}
          ></input>
          <span
            onClick={() => onTrashIconClick(id)}
            className="material-symbols-outlined"
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};
