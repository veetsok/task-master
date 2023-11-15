import styled, { keyframes } from "styled-components";
import Colors from "../../../constants/colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid ${Colors.BG_WIDGETHOVER};
  border-left: 4px solid ${Colors.ORANGE};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  @media (max-width: 1025px) {
    min-height: 60vh;
  }
  @media (max-width: 740px) {
    min-height: 40vh;
  }
`;
