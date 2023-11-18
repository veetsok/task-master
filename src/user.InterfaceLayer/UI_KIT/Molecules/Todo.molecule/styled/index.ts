import styled from "styled-components";
import Colors from "../../../../constants/colors";

interface TodoMoleculeStyle {
  $isShowEdit?: boolean;
}

export const Index = styled.p`
  margin-right: 5px;
  font-weight: 600;
`;
export const Container = styled.div`
  padding: 20px 25px;
  display: flex;
  align-items: baseline;
  & h5 {
    font-weight: 600;
    max-height: 44px;
    @media (max-width: 769px) {
      & h5 {
        font-size: 16px;
      }
    }
  }
`;

export const IsShowEdit = styled.div<TodoMoleculeStyle>`
  display: flex;
  opacity: 1;
  opacity: ${(props) => (props.$isShowEdit ? 1 : 0)};
  position: absolute;
  z-index: 11;
  top: 12px;
  right: 12px;
  overflow: hidden;
  transition: opacity 0.3s ease;
  border: 1px solid ${Colors.BORDER};
  border-radius: 4px;

  background: ${Colors.BG_WIDGET};
  & svg {
    width: 15px;
    height: 15px;
    fill: ${Colors.GRAY};
    &:hover {
      transition: all 0.3s ease;
      fill: ${Colors.YELLOW};
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-size: 18px;
  resize: vertical;
  outline: 0;
  border-radius: 5px;
  background: ${Colors.BG_WIDGET};
  border: 1px solid ${Colors.ORANGE};
`;

export const EditBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
export const DeleteBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${Colors.BORDER};
  padding: 5px;
`;
