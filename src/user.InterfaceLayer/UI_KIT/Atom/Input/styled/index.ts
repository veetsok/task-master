import styled from "styled-components";
import load from "./animations/load";
import Colors from "../../../../constants/colors";

export const InputStyle = styled.input`
  outline: none;
  display: flex;
  color: ${Colors.GRAY};
  font-size: 18px;
  height: auto;
  padding: 12px;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid ${Colors.WHITE};
  background: ${Colors.WHITE};
  cursor: pointer;
  width: 100%;

  &:placeholder {
    color: ${Colors.GRAY};
  }

  &:active,
  &:focus,
  &:hover {
    border: 2px solid ${Colors.ORANGE};
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    font-size: 16px;
    height: 30px;
    padding: 12px;
    border: 1px solid ${Colors.WHITE};
    &:active,
    &:focus,
    &:hover {
      border: 1px solid ${Colors.ORANGE};
    }
  }
  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  @media (max-width: 426px) {
    font-size: 12px;
    border: 1px solid ${Colors.WHITE};
    height: 20px;
    padding: 8px;
  }
`;

export const Error = styled.div`
  color: ${Colors.ORANGE};
  font-size: 25px;
`;

export const Skeleton = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  height: 40px;
  position: relative;
  box-shadow: 0 2px 10px 0 ${Colors.GRAY};
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 80%;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${Colors.ORANGE} 50%,
      transparent 100%
    );
    animation: ${load} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
