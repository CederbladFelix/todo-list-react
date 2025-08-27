import { type ChangeEvent, type ReactElement } from "react";

interface InputTextFieldProps {
  value: string;
  setValue: (value: string) => void;
}

export const InputTextField = ({
  value,
  setValue,
}: InputTextFieldProps): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className="input-group">
      <input
        className="input-box"
        type="text"
        name="description"
        placeholder="Description"
        value={value}
        onChange={handleChange}
      ></input>
      <label htmlFor="description" className="label">
        Description
      </label>
    </div>
  );
};
