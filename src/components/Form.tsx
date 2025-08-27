import { useState, type FormEvent, type ReactElement } from "react";
import { InputTextField } from "./InputTextField";
import type { nextIdProps, ToDoArrayProps } from "../types";
import { SubmitButton } from "./SubmitButton";

type FormProps = ToDoArrayProps & nextIdProps;

export const Form = ({
  setToDoArray,
  nextId,
  setNextId,
}: FormProps): ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.length === 0) return;

    const newTodo = {
      id: nextId,
      description: inputValue,
      done: false,
    };

    setToDoArray((prev) => [...prev, newTodo]);
    setInputValue("");
    setNextId((prev) => prev + 1);
  };
  return (
    <form id="form" onSubmit={handleOnSubmit}>
      <h3>New Todo</h3>
      <InputTextField value={inputValue} setValue={setInputValue} />
      <SubmitButton />
    </form>
  );
};
