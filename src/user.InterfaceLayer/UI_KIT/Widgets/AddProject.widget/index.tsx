import React from "react";
import * as ST from "./styled/index";
import Text from "../../Atom/Text";
import TextEnum from "../../Atom/Text/enum";
import Image from "../../Atom/Image";
import ImageEnum from "../../Atom/Image/enum";
import Plus from "../../../shared/assets/icons/plus.svg?react";
import { ICommonComponentProps } from "../../../constants/commonComponentProps";

export interface AddProjectWidgetProps {
  onClick?: ICommonComponentProps["onClick"];
}

const AddProjectWidget: React.FC<AddProjectWidgetProps> = (
  props: AddProjectWidgetProps
) => {
  const { onClick } = props;
  return (
    <ST.Container>
      <ST.ImageBlock>
        <Image type={ImageEnum.enum_defaultSvg} onClick={onClick} icon={<Plus />} />
      </ST.ImageBlock>
      <Text type={TextEnum.enum_Text_H4} children="New project" />
    </ST.Container>
  );
};
export default AddProjectWidget;
