import React from "react";
import * as ST from "./styled/index";
import TextEnum from "../../UI_KIT/Atom/Text/enum";
import Text from "../../UI_KIT/Atom/Text";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <ST.Footer>
      <ST.ResetContainer>
        <ST.Href href="https://t.me/ivan_veetsok" target="_blank">
          <Text type={TextEnum.enum_Text_H5} children="Created by Ivan Kosteev" />
        </ST.Href>
        <Text type={TextEnum.enum_Text_H5} children="©️ 2023" />
      </ST.ResetContainer>
    </ST.Footer>
  );
};
export default Footer;
