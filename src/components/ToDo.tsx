import type { ReactElement } from "react";

interface ToDoProps {
  id: number;
  done: boolean;
  description: string;
  onToggle: (id: number) => void;
}

export const ToDo = ({
  id,
  done,
  description,
  onToggle,
}: ToDoProps): ReactElement => {
  return (
    <div className={`todo-container ${done ? "done" : ""}`}>
      <p>{id}</p>
      <p>{description}</p>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => onToggle(id)}
        ></input>
      </label>
    </div>
  );
};
