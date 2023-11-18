import styled from "styled-components";
import Colors from "../../../../constants/colors";

export const Container = styled.div`
  border-radius: 5px;
  background: ${Colors.TRANSPARENT};
  width: 100%;
  border: 1px solid ${Colors.BORDER};
  stroke: ${Colors.GRAY};
  &:hover {
    cursor: pointer;
    stroke: ${Colors.ORANGE};
    border: 1px solid ${Colors.ORANGE};
    & h5 {
      color: ${Colors.ORANGE};
    }
  }
`;

export const Block = styled.div`
  display: flex;
  padding: 20px 25px;
  align-items: center;
  & svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  & h5 {
    color: ${Colors.GRAY};
  }
  @media (max-width: 769px) {
    max-width: 360px;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 10px;
    & svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
    & h5 {
      color: ${Colors.GRAY};
      font-size: 12px;
    }
  }
`;
