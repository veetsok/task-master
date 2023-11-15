import React from "react";
import * as ST from "./styled/index";
import Image from "../../Atom/Image";
import ImageEnum from "../../Atom/Image/enum";
import Text from "../../Atom/Text";
import TextEnum from "../../Atom/Text/enum";
import Plus from "../../../shared/assets/icons/plus.svg?react";

export interface NewTodoProps {
  onClick: () => void;
}

const NewTodo: React.FC<NewTodoProps> = (props: NewTodoProps) => {
  const { onClick } = props;
  return (
    <ST.Container onClick={onClick}>
      <ST.Block>
        <Image type={ImageEnum.enum_defaultSvg} icon={<Plus />} />
        <Text type={TextEnum.enum_Text_H5} children="New task" />
      </ST.Block>
    </ST.Container>
  );
};
export default NewTodo;
