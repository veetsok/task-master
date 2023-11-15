import React, { useState, useRef, useCallback, useEffect } from "react";
import { TodoProps } from "./type";
import Text from "../../Atom/Text";
import TextEnum from "../../Atom/Text/enum";
import * as ST from "./styled/index";
import Edit from "../../../shared/assets/icons/edit.svg?react";
import Delete from "../../../shared/assets/icons/delete.svg?react";
import { useDispatch } from "react-redux";
import { editTodoTitle } from "../../../../business.InterfaceLayer/store/actions/todoActions";

const Todo: React.FC<TodoProps> = React.memo((props: TodoProps) => {
  const { title, index, handleDeleteClick, projectId, todoId } = props;
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [draftTitle, setDraftTitle] = useState(title);
  const dispatch = useDispatch();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSaveClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(editTodoTitle(projectId, todoId, draftTitle));
    setisEdit(false);
  }, [dispatch, projectId, todoId, draftTitle]);

  const handleEditIconClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      setisEdit(true);
      setDraftTitle(title);
    },
    [title]
  );

  const handleTextareaClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        isEdit &&
        textareaRef.current &&
        !textareaRef.current.contains(event.target as Node)
      ) {
        handleSaveClick();
      }
    },
    [isEdit, textareaRef, handleSaveClick]
  );

  const handleKeyPress: EventListener = useCallback(
    (event) => {
      if (isEdit && event instanceof KeyboardEvent && event.key === "Enter") {
        event.preventDefault();
        handleSaveClick();
      }
    },
    [isEdit, handleSaveClick]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleOutsideClick, handleKeyPress]);

  return (
    <ST.Container
      onMouseEnter={() => setIsShowEdit(true)}
      onMouseLeave={() => setIsShowEdit(false)}
    >
      <ST.Index>{(index ?? 0) + 1}. </ST.Index>
      {isEdit ? (
        <ST.Textarea
          ref={textareaRef}
          value={draftTitle}
          onClick={handleTextareaClick}
          onChange={(e) => setDraftTitle(e.target.value)}
        />
      ) : (
        <Text type={TextEnum.enum_Text_H5} children={title} />
      )}
      <ST.IsShowEdit $isShowEdit={isShowEdit}>
        <ST.EditBlock>
          <Edit onClick={handleEditIconClick} />
        </ST.EditBlock>
        <ST.DeleteBlock onClick={handleDeleteClick}>
          <Delete />
        </ST.DeleteBlock>
      </ST.IsShowEdit>
    </ST.Container>
  );
});

export default Todo;
