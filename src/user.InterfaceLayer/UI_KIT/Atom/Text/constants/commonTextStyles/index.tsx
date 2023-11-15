import { css } from "styled-components";
import Colors from "../../../../../constants/colors";
import FontsEnum from "../../../../../constants/fonts";

export const commonTextStyles = css`
  color: ${Colors.DEFAULT};
  font-family: ${FontsEnum.AvenirNextCyr};
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  white-space: normal;
`;
