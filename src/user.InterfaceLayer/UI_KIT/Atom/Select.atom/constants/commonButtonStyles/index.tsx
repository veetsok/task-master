import { css } from "styled-components";
import FontsEnum from "../../../../../constants/fonts";
import Colors from "../../../../../constants/colors";

export const commonButtonStyles = css`
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.TRANSPARENT};
  font-family: ${FontsEnum.AvenirNextCyr};
`;
