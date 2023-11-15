import styled from "styled-components";
import Colors from "../../../../constants/colors";

export const Container = styled.div`
  border-top: 1px solid ${Colors.GRAY};
  padding: 10px 0;
  margin-top: 20px;
`;

export const Block = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const AddSub = styled.div`
  cursor: pointer;
  display: inline-flex;
  margin-top: 10px;
  & button {
    border: 1px solid ${Colors.TRANSPARENT};
    transition: all 0.3s ease;
    & div {
      width: 25px;
      margin-right: 15px;
    }
  }
`;

export const SubTodosContent = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Delete = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  stroke: ${Colors.GRAY};
  &:hover {
    stroke: ${Colors.ORANGE};
  }
`;

export const Span = styled.span`
  font-size: 18px;
  flex: 1 1;
  word-break: break-all;
  font-weight: 400;
  outline: none;
  border: none;
`;

export const SubTodosContainer = styled.div`
  padding-bottom: 10px;
  display: inline-flex;
`;

export const InputCheckbox = styled.input`
  margin-right: 15px;
`;

export const InputSubTodo = styled.input`
  font-size: 16px;
  font-weight: 400;
  outline: none;
  border: none;
  background: ${Colors.TRANSPARENT};
`;
