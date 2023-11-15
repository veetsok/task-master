import styled from "styled-components";
import Colors from "../../../constants/colors";

export const Footer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ResetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`;

export const Href = styled.a`
  transition: all 0.3s ease;
  &:hover {
    & h5 {
      color: ${Colors.ORANGE};
    }
  }
`;
