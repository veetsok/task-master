import {
  CommonComponentsProps,
  ICommonComponentProps,
} from "../../../../constants/commonComponentProps";
import { InputTypeEnum } from "../enum";

type ExtendsCommonType = Pick<
  ICommonComponentProps,
  | CommonComponentsProps.className
  | CommonComponentsProps.maxLength
  | CommonComponentsProps.isError
  | CommonComponentsProps.isLoading
  | CommonComponentsProps.max
  | CommonComponentsProps.placeholder
  | CommonComponentsProps.autoFocus
  | CommonComponentsProps.required
  | CommonComponentsProps.disabled
  | CommonComponentsProps.value
>;

export interface IInputProps extends ExtendsCommonType {
  readonly?: boolean;
  type: InputTypeEnum;
  onChange?: (val: string) => void;
}
