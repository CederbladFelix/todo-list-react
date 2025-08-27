import { useState, type ChangeEvent, type ReactElement } from "react";

export const InputTextField = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={inputValue}
        onChange={handleChange}
      ></input>
    </>
  );
};
