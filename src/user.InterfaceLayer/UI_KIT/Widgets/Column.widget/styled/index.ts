import styled from "styled-components";
import Colors from "../../../../constants/colors";

type Status = "Queue" | "Development" | "Done";

interface Column {
  $customProps?: boolean;
  $customStatus?: Status | string;
}

export const ColumnTitle = styled.div<Partial<Column>>`
  display: flex;
  align-items: center;
  & h3 {
    color: ${(props) =>
      props.$customStatus === "Queue"
        ? Colors.RED
        : props.$customStatus === "Development"
        ? Colors.YELLOW
        : Colors.GREEN};
    font-weight: 600;
  }
  & h4 {
    color: ${Colors.GRAY};
    margin-left: 15px;
  }
`;

export const Container = styled.div<Partial<Column>>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 0 10px;
  width: 380px;
`;

export const ColumnBlock = styled.div<Partial<Column>>`
  border-top: 4px;
  border-top-style: solid;
  border-top-color: ${(props) =>
    props.$customProps
      ? props.$customStatus === "Queue"
        ? Colors.RED
        : props.$customStatus === "Development"
        ? Colors.YELLOW
        : Colors.GREEN
      : "transparent"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 370px;
`;
