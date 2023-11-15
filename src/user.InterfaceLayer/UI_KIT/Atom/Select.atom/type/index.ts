import { ICommonComponentProps } from "../../../../constants/commonComponentProps";
import SelectEnum from "../enum";

export interface SelectType extends ICommonComponentProps {
  type: SelectEnum;
  children?: ICommonComponentProps["children"] | string;
  Icon?: JSX.Element | React.ReactNode | undefined;
  isLoading?: boolean;
  onClick?: () => void;
  isOpen?: boolean;
  options?: string[];
  openModal?: (e: React.MouseEvent) => void;
  handleSelect: (value: string) => void;
  toggleSelect?: () => void; // Добавим toggleSelect
  selectedValue?: string | undefined;
}
