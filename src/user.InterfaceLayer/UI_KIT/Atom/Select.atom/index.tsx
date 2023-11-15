import React from "react";
import * as ST from "./styled/styled";
import SelectEnum from "./enum";
import { ISelectPropsDefault } from "./mock";
import { SelectType } from "./type";
import Text from "../Text";
import TextEnum from "../Text/enum";
import DropDown from "../../../shared/assets/icons/dropDown.svg?react";
import ImageEnum from "../Image/enum";
import Image from "../Image";

const Select: React.FC<SelectType> = (props: SelectType) => {
  const { type, isLoading, options, openModal, isOpen, value, handleSelect } = props;

  if (isLoading) return <>Loading</>;
  switch (type) {
    case SelectEnum.enum_defaultSelect: {
      return (
        <ST.DefaultSelect>
          <ST.Selected $isOpen={isOpen} onClick={openModal}>
            <Text type={TextEnum.enum_Text_H5} children={value} />
            <Image type={ImageEnum.enum_defaultSvg} icon={<DropDown />} />
          </ST.Selected>
          {isOpen && (
            <ST.Options>
              {options?.map((option: string) => (
                <ST.Option key={option} onClick={() => handleSelect(option)}>
                  <Text type={TextEnum.enum_Text_H5} children={option} />
                </ST.Option>
              ))}
            </ST.Options>
          )}
        </ST.DefaultSelect>
      );
    }
    default: {
      return <ST.Select>Ошибка</ST.Select>;
    }
  }
};

Select.defaultProps = ISelectPropsDefault;
export default Select;
