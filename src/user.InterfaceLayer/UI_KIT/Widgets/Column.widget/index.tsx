import React, { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import TodoItem from "../TodoItem.widget";
import TextEnum from "../../Atom/Text/enum";
import Text from "../../Atom/Text";
import * as ST from "./styled/index";
import NewTodo from "../../Molecules/NewTodo.molecule";
import { ColumnProps } from "./type";

const Column: React.FC<ColumnProps> = React.memo((props: ColumnProps) => {
  const { columnId, title, todos, onTodoClick, onClick, handleDeleteTodo } = props;

  const [enabled, setEnabled] = React.useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <ST.Container>
      <ST.ColumnTitle $customStatus={title}>
        <Text type={TextEnum.enum_Text_H3} children={title} />
        <Text type={TextEnum.enum_Text_H4} children={todos.length} />
      </ST.ColumnTitle>
      <Droppable droppableId={columnId} direction="vertical">
        {(provided, snapshot) => (
          <ST.ColumnBlock
            {...provided.droppableProps}
            ref={provided.innerRef}
            $customProps={snapshot.isDraggingOver}
            $customStatus={title}
          >
            {todos.map((todo, index) => (
              <TodoItem
                handleDeleteTodo={handleDeleteTodo}
                onTodoClick={onTodoClick}
                key={todo._id}
                todo={todo}
                index={index}
              />
            ))}
            <NewTodo onClick={onClick} />

            {provided.placeholder}
          </ST.ColumnBlock>
        )}
      </Droppable>
    </ST.Container>
  );
});

export default Column;
