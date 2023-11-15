import { Todo, TodoId } from "../../../../constants/commonComponentProps";

interface TodoItemProps {
  todo: Todo;
  index: number;
  onTodoClick: (todo: Todo) => void;
  handleDeleteTodo: (todoId: TodoId) => void;
}

export default TodoItemProps;
