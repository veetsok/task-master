import React from "react";
import * as ST from "./styled/index";
import { format } from "date-fns";
import Created from "../../shared/assets/icons/created.svg?react";
import Finished from "../../shared/assets/icons/finished.svg?react";
import TimeInWork from "../../shared/assets/icons/timeInWork.svg?react";
import Status from "../../shared/assets/icons/status.svg?react";
import Priority from "../../shared/assets/icons/priority.svg?react";
import Text from "../../UI_KIT/Atom/Text";
import Image from "../../UI_KIT/Atom/Image";
import SubTodoList from "../../UI_KIT/Molecules/SubTodos.molecule";
import ImageEnum from "../../UI_KIT/Atom/Image/enum";
import TextEnum from "../../UI_KIT/Atom/Text/enum";
import { SubTodo, ProjectId, TodoId } from "../../constants/commonComponentProps";

export interface ModalTodoProps {
  title: string;
  description: string;
  dateCreated: string;
  dateFinished: string;
  timeAtWork: number;
  status: string;
  priority: string;
  subTodos: SubTodo[];
  projectId: ProjectId;
  todoId: TodoId;
  onClose: () => void;
}

const ModalTodo: React.FC<ModalTodoProps> = (props: ModalTodoProps) => {
  const {
    title,
    description,
    dateCreated,
    dateFinished,
    timeAtWork,
    status,
    priority,
    subTodos,
    projectId,
    todoId,
    onClose,
  } = props;

  const formatDateString = (dateString: string) => {
    if (!dateString) {
      return "N/A";
    }
    const date = new Date(dateString);
    return format(date, "HH:mm dd.MM.yyyy");
  };

  return (
    <ST.ModalWrapper>
      <ST.ModalBackground onClick={onClose}></ST.ModalBackground>
      <ST.Container>
        <Text children={title} type={TextEnum.enum_Text_H2} />
        <Text children={description} type={TextEnum.enum_Text_H4} />
        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<Created />} />
            <Text type={TextEnum.enum_Text_H5} children="Date Created" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Text children={formatDateString(dateCreated)} type={TextEnum.enum_Text_H5} />
          </ST.TextProps>
        </ST.BlockItems>
        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<Finished />} />
            <Text type={TextEnum.enum_Text_H5} children="Date Finish" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Text
              children={formatDateString(dateFinished)}
              type={TextEnum.enum_Text_H5}
            />
          </ST.TextProps>
        </ST.BlockItems>
        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<TimeInWork />} />
            <Text type={TextEnum.enum_Text_H5} children="Time at work" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Text children={timeAtWork} type={TextEnum.enum_Text_H5} />
          </ST.TextProps>
        </ST.BlockItems>
        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<Status />} />
            <Text type={TextEnum.enum_Text_H5} children="Status" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Text children={status} type={TextEnum.enum_Text_H5} />
          </ST.TextProps>
        </ST.BlockItems>
        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<Priority />} />
            <Text type={TextEnum.enum_Text_H5} children="Priority" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Text children={priority} type={TextEnum.enum_Text_H5} />
          </ST.TextProps>
        </ST.BlockItems>
        <SubTodoList subTodos={subTodos} projectId={projectId} todoId={todoId} />
      </ST.Container>
    </ST.ModalWrapper>
  );
};

export default ModalTodo;
