import styled from "styled-components";
import Colors from "../../../../constants/colors";

export const Container = styled.div`
  border-radius: 5px;
  background: ${Colors.TRANSPARENT};
  width: 100%;
  border-radius: 5px;
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
`;
