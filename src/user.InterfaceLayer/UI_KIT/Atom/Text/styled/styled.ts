import styled from "styled-components";
import TextEnum from "../enum";
import Colors from "../../../../constants/colors";
import commonTextFonts from "../constants/fonts";
import { commonTextStyles } from "../constants/commonTextStyles";

interface Text {
  isLoading?: boolean;
}

export const H1 = styled.h1<Text>`
  ${commonTextStyles};
  text-align: center;
  font-size: ${commonTextFonts[TextEnum.enum_Text_H1].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H1].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H1].fontWeight};
`;

export const H2 = styled.h2<Text>`
  ${commonTextStyles};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H2].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H2].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H2].fontWeight};
`;
export const H3 = styled.h3<Text>`
  ${commonTextStyles};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H3].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H3].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H3].fontWeight};
`;
export const H4 = styled.h4<Text>`
  ${commonTextStyles};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H4].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H4].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H4].fontWeight};
`;

export const H5 = styled.h5<Text>`
  ${commonTextStyles};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H5].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H5].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H5].fontWeight};
`;
export const H6 = styled.h6<Text>`
  ${commonTextStyles};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H6].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H6].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H6].fontWeight};
`;

export const Text = styled.div<Text>`
  ${commonTextStyles};
  color: ${Colors.RED};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H5].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H5].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H5].fontWeight};
`;
