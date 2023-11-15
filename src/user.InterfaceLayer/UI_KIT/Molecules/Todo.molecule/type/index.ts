import { ProjectId, TodoId } from "../../../../constants/commonComponentProps";

export interface TodoProps {
  index?: number;
  title?: string;
  description?: string;
  handleDeleteClick?: (e: React.MouseEvent) => void;
  projectId?: ProjectId;
  todoId?: TodoId;
}
