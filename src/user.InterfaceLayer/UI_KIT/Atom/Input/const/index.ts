import { InputTypeEnum } from "../enum";
import { IInputProps } from "../type";

export const dataTestId = "input";

export const InputPropsDefaultProps: IInputProps = {
  type: InputTypeEnum.TEXT,
  value: "",
  onChange: () => ({}),
};
