import React from "react";
import { EmptyProjectProps } from "./type";
import * as ST from "./styled/index";
import Text from "../../Atom/Text";
import TextEnum from "../../Atom/Text/enum";
import Button from "../../Atom/Button";
import ButtonEnum from "../../Atom/Button/enum";
import Image from "../../Atom/Image";
import ImageEnum from "../../Atom/Image/enum";

const EmptyProject: React.FC<EmptyProjectProps> = (props: EmptyProjectProps) => {
  const { openModal } = props;

  return (
    <ST.Container>
      <Text
        type={TextEnum.enum_Text_H1}
        children={`Immerse yourself in the world of planning with\u00a0us`}
      />
      <ST.Button>
        <Button
          onClick={openModal}
          type={ButtonEnum.enum_signupButton}
          children="Get started"
        />
      </ST.Button>
      <ST.Image>
        <Image type={ImageEnum.enum_backgroundImage} background="/img/empty.png" />
      </ST.Image>
    </ST.Container>
  );
};
export default EmptyProject;
