import styled, { CSSProperties } from "styled-components";
import load from "./animations/load";
import Colors from "../../../../constants/colors";

interface ProjectWidgetPropsStyle {
  $customStyle?: CSSProperties;
}

export const Skeleton = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  width: 320px;
  height: 250px;
  padding: 30px;
  margin: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${Colors.BG_WIDGET};
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
  @media (min-width: 1024px) {
    width: 25%;
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    width: 33.33333%;
  }
`;

export const Container = styled.div<ProjectWidgetPropsStyle>`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  background: ${Colors.BG_WIDGET};
  box-shadow: 0px 10px 40px 0px rgba(181, 194, 194, 0.2);
  margin: 10px;
  border: 1px solid ${Colors.TRANSPARENT};
  overflow: hidden;
  transition: border 0.3s ease;
  height: 200px;
  transform: 0;
  & h3,
  & h6 {
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
    white-space: normal;
    line-height: 20px;
    max-height: 120px;
  }
  & h3 {
    font-weight: 500;
    word-wrap: break-word;
  }

  &:hover {
    border: 1px solid ${Colors.ORANGE};
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
    transform: ${(props) =>
      props.$customStyle ? props.$customStyle.transform : "none !important"};
  }

  & button {
    position: absolute;
    right: 0px;
    top: 0px;
    & div {
      stroke: ${Colors.GRAY};
      padding: 8.5px;
      &:hover {
        stroke: ${Colors.ORANGE};
      }
      & svg {
        width: 11.5px;
        height: 11.5px;
      }
    }
  }
`;

export const IconBlock = styled.div`
  display: inline;
  align-items: flex-start;
  margin-top: auto;
  & h6 {
    color: ${Colors.GRAY};
  }
`;

export const CloseBlock = styled.div`
  opacity: 1;
  z-index: 999;
  & button {
    border: 1px solid ${Colors.TRANSPARENT};
    &:hover {
      border: 1px solid ${Colors.TRANSPARENT};
    }
  }
`;
