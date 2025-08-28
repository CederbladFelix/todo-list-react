import { type ChangeEvent, type ReactElement } from "react";

interface InputTextFieldProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
}

export const InputTextField = ({
  name,
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
        name={name}
        placeholder=" "
        value={value}
        onChange={handleChange}
      ></input>
      <label htmlFor={name} className="label">
        {name}
      </label>
    </div>
  );
};
