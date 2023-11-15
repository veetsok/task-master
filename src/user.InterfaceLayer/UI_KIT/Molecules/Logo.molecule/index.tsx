import React from "react";
import { Link } from "react-router-dom";
import * as ST from "./styled";
import Text from "../../Atom/Text";
import TextEnum from "../../Atom/Text/enum";
import Image from "../../Atom/Image";
import ImageEnum from "../../Atom/Image/enum";
import LogoSvg from "../../../shared/assets/icons/logo.svg?react";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <ST.Logo>
        <Image type={ImageEnum.enum_defaultSvg} icon={<LogoSvg />} />
        <Text type={TextEnum.enum_Text_H4} children="Task.Master" />
      </ST.Logo>
    </Link>
  );
};
export default Logo;
