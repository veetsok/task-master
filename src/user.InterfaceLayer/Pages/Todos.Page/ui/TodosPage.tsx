import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodoOrder,
  updateTodoStatus,
} from "../../../../business.InterfaceLayer/store/actions/todoActions";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "../../../UI_KIT/Widgets/Column.widget";
import * as ST from "../style/index";
import Text from "../../../UI_KIT/Atom/Text";
import { RootState } from "../../../../business.InterfaceLayer/store/reducers/rootReducer";
import ModalAddTodo from "../../../Components/ModalAddTodo.component.bll";
import ModalTodo from "../../../Components/ModalTodo.component.bll";
import TextEnum from "../../../UI_KIT/Atom/Text/enum";
import { Todo, TodoId } from "../../../constants/commonComponentProps";

const TodosPage: React.FC = React.memo(() => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const projectTitle = searchParams.get("title") || "";
  const projectDescription = searchParams.get("description") || "";

  const todos = useSelector((state: RootState) => state.todo.todos);

  const [todosStatusOrder] = useState(["Queue", "Development", "Done"]);
  const [changeNewTodoTitle, setChangeNewTodoTitle] = useState("");
  const [changeNewTodoDescription, setChangeNewTodoDescription] = useState("");
  const [modalContent, setModalContent] = useState<"addTodo" | "viewTodo" | null>(null);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [workHours, setWorkHours] = useState(0);
  const [selectedPriority, setSelectedPriority] = useState("Medium");

  const openModal = (content: "addTodo" | "viewTodo") => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleAddTodo = () => {
    dispatch(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      addTodo(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        projectId,
        changeNewTodoTitle,
        changeNewTodoDescription,
        selectedDate,
        workHours,
        selectedPriority
      )
    );
    setChangeNewTodoTitle("");
    setChangeNewTodoDescription("");
    setSelectedDate(null);
    setWorkHours(0);
    closeModal();
  };

  const handleDeleteTodo = (todoId: TodoId) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(deleteTodo(projectId, todoId));
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const sourceIndex = result.source.index;
      const destinationIndex = result.destination.index;
      const sourceStatus = result.source.droppableId;
      const destinationStatus = result.destination.droppableId;

      // Получите задачи для текущей колонки
      const tasksInSourceColumn = todos.filter((todo) => todo.status === sourceStatus);
      // Получите перемещаемую задачу
      const movedTask = tasksInSourceColumn[sourceIndex];
      if (sourceStatus === destinationStatus) {
        // Если задача перемещается внутри одной и той же колонки
        const reorderedTasks = [...tasksInSourceColumn];
        reorderedTasks.splice(sourceIndex, 1);
        reorderedTasks.splice(destinationIndex, 0, movedTask);
        // Обновите порядок задач внутри колонки
        reorderedTasks.forEach((task, index) => {
          task.order = index;
        });
        // Сохраните обновленный порядок на сервере
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(updateTodoOrder(projectId, reorderedTasks));
      } else {
        // Если задача перемещается между колонками, обновите ее статус
        movedTask.status = destinationStatus;
        // Отправьте запрос на сервер, чтобы обновить статус задачи
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(updateTodoStatus(projectId, movedTask._id, destinationStatus));
      }
    },
    [dispatch, todos, projectId]
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getTodos(projectId));
  }, [dispatch, projectId]);

  const handleTodoClick = (todos: Todo) => {
    setSelectedTodo(todos);
    openModal("viewTodo");
  };

  return (
    <ST.Container>
      <ST.ResetContainer>
        <ST.TextBlock>
          <Text type={TextEnum.enum_Text_H2} children={projectTitle} />
          <Text type={TextEnum.enum_Text_H3} children={projectDescription} />
        </ST.TextBlock>
        {modalContent === "addTodo" && (
          <ModalAddTodo
            selectedPriority={selectedPriority}
            setSelectedPriority={setSelectedPriority}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            workHours={workHours}
            setWorkHours={setWorkHours}
            handleAddTodo={handleAddTodo}
            changeNewTodoTitle={changeNewTodoTitle}
            changeNewTodoDescription={changeNewTodoDescription}
            setChangeNewTodoDescription={setChangeNewTodoDescription}
            setChangeNewTodoTitle={setChangeNewTodoTitle}
            onClose={closeModal}
          />
        )}
        {modalContent === "viewTodo" && selectedTodo && (
          <ModalTodo
            title={selectedTodo.title}
            description={selectedTodo.description}
            dateCreated={selectedTodo.createDate}
            dateFinished={selectedTodo.dueDate}
            timeAtWork={selectedTodo.timeInWork}
            status={selectedTodo.status}
            priority={selectedTodo.priority}
            subTodos={selectedTodo.subTodos}
            projectId={selectedTodo.project}
            todoId={selectedTodo._id}
            onClose={closeModal}
          />
        )}
        <ST.TodosList>
          <DragDropContext onDragEnd={onDragEnd}>
            {todosStatusOrder.map((status) => (
              <Column
                handleDeleteTodo={handleDeleteTodo}
                onClick={() => openModal("addTodo")}
                key={status}
                columnId={status}
                title={status}
                todos={todos.filter((todo) => todo.status === status)}
                onTodoClick={handleTodoClick}
              />
            ))}
          </DragDropContext>
        </ST.TodosList>
      </ST.ResetContainer>
    </ST.Container>
  );
});

export default TodosPage;