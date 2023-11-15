import { Todo, TodoId } from "../../../../constants/commonComponentProps";

export interface ColumnProps {
  columnId: string;
  title: string;
  todos: Todo[];
  onTodoClick: (todo: Todo) => void;
  handleDeleteTodo: (todoId: TodoId) => void;
  onClick: () => void;
}
