import styled from "styled-components";
import Colors from "../../../constants/colors";
import fade from "../../ModalAddTodo.component.bll/styled/animation";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin: 0 20px;
  max-height: calc(100vh - 48px);
  position: relative;
  animation: ${fade} 0.3s ease;
  width: calc(100% - 48px);
  background: ${Colors.BG_WIDGET};
  border-radius: 10px;
  padding: 25px;

  @media (min-width: 1024px) {
    width: 40%;
  }
  & h3 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const ModalBackground = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  animation: all 0.3s ease;
  z-index: -1;
`;

export const BlockItems = styled.div`
  & h4 {
    margin-bottom: 10px;
  }
`;
export const BlockItemsText = styled.div`
  margin-bottom: 25px;
  width: calc(100% - 25px);
  & input {
    outline: none;
    display: flex;
    color: ${Colors.GRAY};
    font-size: 18px;
    height: auto;
    padding: 12px;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid ${Colors.GRAY};
    background: ${Colors.WHITE};
    cursor: pointer;
    width: 100%;
    &:active,
    &:target,
    &:focus,
    &:focus-within,
    &:hover,
    &:visited,
    &:focus-visible {
      border: 2px solid ${Colors.ORANGE};
    }
  }
`;
