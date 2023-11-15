import styled from "styled-components";
import Colors from "../../../../constants/colors";

interface Select {
  isLoading?: boolean;
  $isOpen?: boolean;
}

export const DefaultSelect = styled.div<Select>`
  position: relative;
  width: 100%;
  font-family: Arial, sans-serif;
`;

export const Selected = styled.div<Select>`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: ${Colors.WHITE};
  border: 2px solid ${(props) => (props.$isOpen ? Colors.ORANGE : Colors.GRAY)};
  border-radius: 12px;
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    border: 2px solid ${Colors.ORANGE};
  }
  & div {
    align-items: self-end;
    transition: all 0.3s ease;
    transform: ${(props) => (props.$isOpen ? `rotate(180deg)` : `rotate(0deg)`)};
    & svg {
      fill: ${Colors.GRAY};
    }
  }
`;

export const Options = styled.div<Select>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${Colors.WHITE};
  border-radius: 12px;
`;

export const Option = styled.div<Select>`
  padding: 10px;
  cursor: pointer;
  border-radius: 12px;
  & h5 {
    color: ${Colors.GRAY};
  }
  &:hover {
    background: ${Colors.BG_WIDGETHOVER};
  }
`;

export const Select = styled.div<Select>``;
