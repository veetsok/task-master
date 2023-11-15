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
  animation: Modal_fade-down__uPWJY 0.3s ease;
  width: calc(100% - 48px);
  background: ${Colors.BG_WIDGET};
  border-radius: 10px;
  padding: 25px;
  h2 {
    text-align: center;
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
  margin-bottom: 20px;
  svg {
    width: 18px;
    height: 18px;
    fill: ${Colors.GRAY};
  }
`;

export const Calendar = styled.div`
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
    width: 140%;
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

export const BlockItemsText = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  & div {
    margin-right: 10px;
  }
`;

export const WorkHours = styled.div`
  margin-right: 10px;
`;
export const TextProps = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
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

export const SelectBlock = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: "\25BC";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }
  border: 2px solid ${Colors.TRANSPARENT};
`;

export const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  border: 2px solid ${Colors.GRAY};
  border-radius: 5px;
  background-color: ${Colors.WHITE};
  width: 100%;
  cursor: pointer;
  outline: none; /* Убираем контур в фокусе */
  &:active,
  &:target,
  &:focus,
  &:focus-within,
  &:hover,
  &:visited,
  &:focus-visible {
    border: 2px solid ${Colors.ORANGE};
  }
`;

export const Option = styled.option`
  padding: 10px;
`;
