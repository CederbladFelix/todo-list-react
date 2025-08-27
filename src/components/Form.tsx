import type { ReactElement } from "react";
import { InputTextField } from "./InputTextField";

export const Form = (): ReactElement => {
  return (
    <form id="form">
      <h3>New Todo</h3>
      <InputTextField />
    </form>
  );
};
