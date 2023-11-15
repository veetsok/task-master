import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import * as ST from "./styled/index";
import Image from "../../Atom/Image";
import ImageEnum from "../../Atom/Image/enum";
import Plus from "../../../shared/assets/icons/plus.svg?react";
import Delete from "../../../shared/assets/icons/close.svg?react";
import Button from "../../Atom/Button";
import Text from "../../Atom/Text";
import TextEnum from "../../Atom/Text/enum";
import ButtonEnum from "../../Atom/Button/enum";
import {
  SubTodo,
  TodoId,
  ProjectId,
  SubTodoId,
} from "../../../constants/commonComponentProps";

export interface SubTodoList {
  subTodos?: SubTodo[];
  todoId?: TodoId;
  projectId?: ProjectId;
}

const SubTodoList: React.FC<SubTodoList> = React.memo((props: SubTodoList) => {
  const { subTodos, todoId, projectId } = props;
  const [showAddSubTodo] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const editFieldRef = useRef<HTMLInputElement>(null);
  const addFieldRef = useRef<HTMLInputElement>(null);

  const [newSubTodoTitle, setNewSubTodoTitle] = useState("");
  const [localSubTodos, setLocalSubTodos] = useState(subTodos || []);

  const dispatch = useDispatch();

  const handleAddSubTodo = async () => {
    if (!newSubTodoTitle.trim()) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(addSubTodo(projectId, todoId, newSubTodoTitle));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setLocalSubTodos([...localSubTodos, { title: newSubTodoTitle, status: false }]);
    setNewSubTodoTitle("");
  };

  const handleDeleteSubTodo = async (subTodoId: SubTodoId) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await dispatch(deleteSubTodo(projectId, todoId, subTodoId));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const updatedSubTodos = localSubTodos.filter(
        (subTodo) => subTodo._id !== subTodoId
      );
      setLocalSubTodos(updatedSubTodos);
    } catch (error) {
      console.error("Failed to delete subTodo", error);
    }
  };

  const handleToggleSubTodoStatus = async (
    subTodoId: SubTodoId,
    currentStatus: boolean
  ) => {
    const newStatus = !currentStatus;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(updateSubTodoStatus(projectId, todoId, subTodoId, newStatus))
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const updatedSubTodos = localSubTodos.map((subTodo) =>
          subTodo._id === subTodoId ? { ...subTodo, status: newStatus } : subTodo
        );
        setLocalSubTodos(updatedSubTodos);
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .catch((error) => {
        console.error("Failed to update subTodo status", error);
      });
  };

  const handleEditSave = async (subTodoId: SubTodoId) => {
    if (!newSubTodoTitle.trim()) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(updateSubTodoTitle(projectId, todoId, subTodoId, newSubTodoTitle))
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const updatedSubTodos = localSubTodos.map((subTodo) =>
          subTodo._id === subTodoId ? { ...subTodo, title: newSubTodoTitle } : subTodo
        );
        setLocalSubTodos(updatedSubTodos);
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .catch((error) => {
        console.error(error);
      });

    setEditingId(null);
    setNewSubTodoTitle("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    subTodoId: SubTodoId
  ) => {
    if (e.key === "Enter") {
      if (subTodoId) {
        handleEditSave(subTodoId);
      } else {
        handleAddSubTodo();
      }
    }
  };

  const handleBlur = (subTodoId: SubTodoId) => {
    if (subTodoId) {
      handleEditSave(subTodoId);
    } else {
      handleAddSubTodo();
    }
  };

  const addingOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
  };
  const addingClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(false);
  };

  useEffect(() => {
    if (isAdding && addFieldRef.current) {
      addFieldRef.current.focus();
    }
    if (editingId && editFieldRef.current) {
      editFieldRef.current.focus();
    }
    setLocalSubTodos(subTodos || []);
  }, [isAdding, editingId, subTodos]);
  return (
    <ST.Container onClick={addingClose}>
      <ST.Block>
        {localSubTodos.map((subTodo, index) => (
          <ST.SubTodosContainer key={subTodo._id || index}>
            <ST.InputCheckbox
              ref={editFieldRef}
              type="checkbox"
              checked={subTodo.status}
              onChange={() => handleToggleSubTodoStatus(subTodo._id, subTodo.status)}
            />
            {editingId === subTodo._id ? (
              <ST.InputSubTodo
                ref={editFieldRef}
                value={newSubTodoTitle}
                onChange={(e) => setNewSubTodoTitle(e.target.value)}
                onBlur={() => handleBlur(subTodo._id)}
                onKeyDown={(e) => handleKeyDown(e, subTodo._id)}
              />
            ) : (
              <ST.SubTodosContent>
                <ST.Span
                  style={{ textDecoration: subTodo.status ? "line-through" : "none" }}
                  onClick={() => {
                    setEditingId(subTodo._id);
                    setNewSubTodoTitle(subTodo.title);
                  }}
                >
                  {subTodo.title}
                </ST.Span>
                <ST.Delete onClick={() => handleDeleteSubTodo(subTodo._id)}>
                  <Image type={ImageEnum.enum_defaultSvg} icon={<Delete />} />
                </ST.Delete>
              </ST.SubTodosContent>
            )}
          </ST.SubTodosContainer>
        ))}
        {showAddSubTodo && (
          <>
            <input
              type="text"
              value={newSubTodoTitle}
              onChange={(e) => setNewSubTodoTitle(e.target.value)}
            />
            <Button type={ButtonEnum.enum_defaultButton} onClick={handleAddSubTodo} />
          </>
        )}
      </ST.Block>

      {isAdding ? (
        <input
          ref={addFieldRef}
          value={newSubTodoTitle}
          onChange={(e) => setNewSubTodoTitle(e.target.value)}
          onBlur={() => handleBlur("")}
          onKeyDown={(e) => handleKeyDown(e, "")}
        />
      ) : (
        <ST.AddSub onClick={addingOpen}>
          <Button type={ButtonEnum.enum_defaultButton}>
            <Image type={ImageEnum.enum_defaultSvg} icon={<Plus />} />
            <Text type={TextEnum.enum_Text_H5} children="Add Sub Todo" />
          </Button>
        </ST.AddSub>
      )}
    </ST.Container>
  );
});

export default SubTodoList;
