import { ICommonComponentProps } from "../../../../constants/commonComponentProps";
import ImageEnum from "../enum";

export interface ImageType extends ICommonComponentProps {
  type: ImageEnum;
  children?: ICommonComponentProps["children"] | string; // TODO: В случае если нужна верстка в Image добавить JSX.Element
  icon?: ICommonComponentProps["icon"] | undefined;
  isLoading?: ICommonComponentProps["isLoading"];
  background?: ICommonComponentProps["background"];
  src?: ICommonComponentProps["src"];
  onClick?: ICommonComponentProps["onClick"];
}
