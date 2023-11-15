import React, { useState } from "react";
import * as ST from "./styled/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ModalAddTodoProps } from "./type";
import Finished from "../../shared/assets/icons/finished.svg?react";
import Priority from "../../shared/assets/icons/priority.svg?react";
import TimeInWork from "../../shared/assets/icons/timeInWork.svg?react";
import Text from "../../UI_KIT/Atom/Text";
import Input from "../../UI_KIT/Atom/Input";
import Image from "../../UI_KIT/Atom/Image";
import Select from "../../UI_KIT/Atom/Select.atom";
import Button from "../../UI_KIT/Atom/Button";
import ButtonEnum from "../../UI_KIT/Atom/Button/enum";
import ImageEnum from "../../UI_KIT/Atom/Image/enum";
import { InputTypeEnum } from "../../UI_KIT/Atom/Input/enum";
import SelectEnum from "../../UI_KIT/Atom/Select.atom/enum";
import TextEnum from "../../UI_KIT/Atom/Text/enum";



const ModalAddTodo: React.FC<ModalAddTodoProps> = (props) => {
  const {
    handleAddTodo,
    changeNewTodoTitle,
    setChangeNewTodoTitle,
    changeNewTodoDescription,
    setChangeNewTodoDescription,
    onClose,
    selectedDate,
    setSelectedDate,
    workHours,
    setWorkHours,
    selectedPriority,
    setSelectedPriority,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handlePriorityChange = (value: string) => {
    if (setSelectedPriority) {
      setSelectedPriority(value);
      setIsOpen(false);
    }
  };
  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const calculateWorkHours = (date: Date | null | undefined) => {
    if (setWorkHours && date) {
      const currentDate = new Date();
      const timeDifference = date.getTime() - currentDate.getTime();
      const hoursDifference = Math.floor(timeDifference / (1000 * 3600));
      setWorkHours(hoursDifference);
    }
  };

  const handleDateChange = (date: Date | null) => {
    if (setSelectedDate) {
      setSelectedDate(date);
      calculateWorkHours(date);
    }
  };

  return (
    <ST.ModalWrapper onClick={closeModal}>
      <ST.ModalBackground onClick={onClose}></ST.ModalBackground>
      <ST.Container>
        <ST.BlockItems>
          <ST.BlockItemsText>
            <Text children="Project Title" type={TextEnum.enum_Text_H5} />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Input
              type={InputTypeEnum.TEXT}
              placeholder="Enter task title..."
              value={changeNewTodoTitle}
              onChange={setChangeNewTodoTitle}
            />
          </ST.TextProps>
        </ST.BlockItems>
        <ST.BlockItems>
          <ST.BlockItemsText>
            <Text children="Project Description" type={TextEnum.enum_Text_H5} />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Input
              type={InputTypeEnum.TEXT}
              placeholder="Enter task description..."
              value={changeNewTodoDescription}
              onChange={setChangeNewTodoDescription}
            />
          </ST.TextProps>
        </ST.BlockItems>

        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<Finished />} />
            <Text type={TextEnum.enum_Text_H5} children="Date Finish" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <ST.Calendar>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
                onCalendarClose={() => calculateWorkHours(selectedDate)}
              />
            </ST.Calendar>
          </ST.TextProps>
        </ST.BlockItems>

        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<TimeInWork />} />
            <Text type={TextEnum.enum_Text_H5} children="Time at work" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <ST.WorkHours>
              <Text type={TextEnum.enum_Text_H5} children={workHours} />
            </ST.WorkHours>
            <Text type={TextEnum.enum_Text_H5} children="Hours" />
          </ST.TextProps>
        </ST.BlockItems>

        <ST.BlockItems>
          <ST.BlockItemsText>
            <Image type={ImageEnum.enum_defaultSvg} icon={<Priority />} />
            <Text type={TextEnum.enum_Text_H5} children="Priority" />
          </ST.BlockItemsText>
          <ST.TextProps>
            <Select
              type={SelectEnum.enum_defaultSelect}
              isOpen={isOpen}
              openModal={openModal}
              value={selectedPriority}
              toggleSelect={() => setIsOpen(!isOpen)}
              selectedValue={selectedPriority}
              options={["Low", "Medium", "Hight"]}
              handleSelect={handlePriorityChange}
            />
          </ST.TextProps>
        </ST.BlockItems>

        <Button
          type={ButtonEnum.enum_defaultButton}
          onClick={handleAddTodo}
          children="Add todo"
        />
      </ST.Container>
    </ST.ModalWrapper>
  );
};
export default ModalAddTodo;