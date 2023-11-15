import styled from "styled-components";
import Colors from "../../../../constants/colors";

export const Container = styled.div`
  border: 1px solid ${Colors.TRANSPARENT};
  border-radius: 5px;
  width: 100%;
  -webkit-transition: background 0.3s ease;
  -o-transition: background 0.3s ease;
  transition: background 0.3s ease;
  background: ${Colors.BG_WIDGET};
  border-radius: 5px;
  position: relative;
  &:hover {
    background: ${Colors.BG_WIDGETHOVER};
    cursor: pointer;
  }
`;
