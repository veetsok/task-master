import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Todo from "../../Molecules/Todo.molecule";
import * as ST from "./styled/index";
import TodoItemProps from "./type";

const TodoItem: React.FC<TodoItemProps> = React.memo((props: TodoItemProps) => {
  const { todo, index, onTodoClick, handleDeleteTodo } = props;

  return (
    <Draggable draggableId={todo._id.toString()} index={index}>
      {(provided) => (
        <ST.Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onTodoClick(todo);
          }}
          style={{
            userSelect: "none",
            ...provided.draggableProps.style,
          }}
        >
          <Todo
            projectId={todo.project}
            todoId={todo._id}
            handleDeleteClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              handleDeleteTodo(todo._id);
            }}
            index={index}
            title={todo.title}
          />
        </ST.Container>
      )}
    </Draggable>
  );
});

export default TodoItem;
