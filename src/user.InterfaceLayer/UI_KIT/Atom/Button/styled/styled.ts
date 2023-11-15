import styled from "styled-components";
import commonButtonFonts from "../constants/fonts";
import ButtonEnum from "../enum";
import Colors from "../../../../constants/colors";
import { commonButtonStyles } from "../constants/commonButtonStyles";

interface Button {
  isLoading?: boolean;
}

export const DefaultButton = styled.button<Button>`
  ${commonButtonStyles};
  border: 1px solid ${Colors.BLACK};
  background: ${Colors.TRANSPARENT};
  font-size: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontWeight};
  line-height: ${commonButtonFonts[ButtonEnum.enum_defaultButton].lineHeight};
  stroke: ${Colors.GRAY};

  &:hover {
    border: 1px solid ${Colors.ORANGE};
    color: ${Colors.ORANGE};
    & h5 {
      color: ${Colors.ORANGE};
    }
    & svg {
      fill: ${Colors.ORANGE};
      stroke: ${Colors.ORANGE};
    }
  }
`;

export const LoginButton = styled.button<Button>`
  ${commonButtonStyles};
  border: 1px solid ${Colors.BLACK};
  background: ${Colors.TRANSPARENT};
  font-size: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontWeight};
  line-height: ${commonButtonFonts[ButtonEnum.enum_defaultButton].lineHeight};
`;

export const SignupButton = styled.button<Button>`
  ${commonButtonStyles};
  background: ${Colors.ORANGE};
  color: ${Colors.WHITE};
  font-size: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontWeight};
  line-height: ${commonButtonFonts[ButtonEnum.enum_defaultButton].lineHeight};
  &:hover {
    border: 1px solid ${Colors.ORANGE};
    background: ${Colors.TRANSPARENT};
    color: ${Colors.ORANGE};
  }
`;

export const LogoutButton = styled.button<Button>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${Colors.TRANSPARENT};
  background: ${Colors.TRANSPARENT};
  font-size: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontSize};
  font-style: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontStyle};
  font-weight: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontWeight};
  line-height: ${commonButtonFonts[ButtonEnum.enum_defaultButton].lineHeight};
`;

export const IconButton = styled.button<Button>``;

export const Button = styled.div<Button>``;
