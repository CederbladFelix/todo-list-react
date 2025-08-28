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
  const [descriptionInputValue, setDescriptionInputValue] =
    useState<string>("");
  const [authorInputValue, setAuthorInputValue] = useState<string>("");

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (descriptionInputValue.length === 0) return;

    const newTodo = {
      id: nextId,
      description: descriptionInputValue,
      done: false,
      author: authorInputValue,
      timestamp: new Date(),
    };

    setToDoArray((prev) => [...prev, newTodo]);
    setDescriptionInputValue("");
    setAuthorInputValue("");
    setNextId((prev) => prev + 1);
  };
  return (
    <form id="form" onSubmit={handleOnSubmit}>
      <h3>New Todo</h3>
      <InputTextField
        name="Description"
        value={descriptionInputValue}
        setValue={setDescriptionInputValue}
      />
      <InputTextField
        name="Author"
        value={authorInputValue}
        setValue={setAuthorInputValue}
      />
      <SubmitButton />
    </form>
  );
};
