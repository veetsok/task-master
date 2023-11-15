import styled from "styled-components";
import Colors from "../../../../constants/colors";

export const ImageBlock = styled.div`
  width: 70px;
  height: 70px;
  & svg {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  width: 320px;
  height: 250px;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border: 1px solid ${Colors.TRANSPARENT};
  border-radius: 10px;
  background: ${Colors.BG_WIDGET};
  box-shadow: 0px 10px 40px 0px rgba(181, 194, 194, 0.2);
  margin: 10px;
  stroke: ${Colors.GRAY};
  &:hover {
    border: 1px solid ${Colors.ORANGE};
    stroke: ${Colors.ORANGE};
    & h4 {
      color: ${Colors.ORANGE};
    }
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    width: 33.33333%;
  }

  & h4 {
    color: ${Colors.GRAY};
    margin-top: 20px;
  }
`;
