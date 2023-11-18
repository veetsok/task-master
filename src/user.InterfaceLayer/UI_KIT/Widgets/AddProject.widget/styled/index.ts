import styled from "styled-components";
import Colors from "../../../../constants/colors";

export const ImageBlock = styled.div`
  width: 70px;
  height: 70px;
  & svg {
    cursor: pointer;
  }
  @media (max-width: 626px) {
    width: 50px;
    height: 50px;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  cursor: pointer;
  height: 200px;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
    // width: calc(33.3333% - 62px);
    width: calc(33.3333% - 88px);
  }
  @media (min-width: 740px) and (max-width: 1081px) {
    // width: calc(50% - 62px);
    width: 90%;
  }

  @media (max-width: 740px) {
    margin: 0 auto;
    width: 90%;
  }

  @media (max-width: 626px) {
    width: calc(100% - 60px);
    margin: 0 auto;
    height: 130px;
    padding: 30px;
  }

  & h4 {
    color: ${Colors.GRAY};
    margin-top: 10px;
  }
`;
