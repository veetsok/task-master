import { ICommonComponentProps } from "../../../../constants/commonComponentProps";
import TextEnum from "../enum";

interface TextType extends ICommonComponentProps {
  type: TextEnum;
  children?: ICommonComponentProps["children"] | string; // TODO: В случае если нужна верстка в button добавить JSX.Element
  isLoading?: boolean;
}

export default TextType;
