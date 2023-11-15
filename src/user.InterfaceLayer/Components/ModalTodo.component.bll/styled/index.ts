import styled from "styled-components";
import Colors from "../../../constants/colors";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-height: calc(100vh - 48px);
  position: relative;
  overflow-y: overlay;
  width: calc(100% - 48px);
  background: ${Colors.BG_WIDGET};
  border-radius: 10px;
  padding: 25px;
  width: calc(100% + 17px);
  /* Стили для скроллбара */
  &::-webkit-scrollbar {
    width: 10px; /* ширина полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: ${Colors.BG_WIDGETHOVER}; /* цвет дорожки скроллбара */
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.BG_WIDGETHOVER}; /* цвет ползунка скроллбара */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${Colors.ORANGE};
    cursor: pointer; /* цвет ползунка скроллбара при наведении */
  }
  & h2 {
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 600;
  }
  & h4 {
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const ModalBackground = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  animation: all 0.3s ease;
  z-index: -1;
`;

export const Input = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

export const BlockItems = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 18px;
    height: 18px;
    fill: ${Colors.GRAY};
  }
`;

export const BlockItemsText = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  & div {
    margin-right: 10px;
  }
  & h5 {
    color: ${Colors.GRAY};
  }
`;

export const TextProps = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
