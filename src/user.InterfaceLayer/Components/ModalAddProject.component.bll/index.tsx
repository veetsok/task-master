import React, { Dispatch, SetStateAction } from "react";
import Button from "../../UI_KIT/Atom/Button";
import Input from "../../UI_KIT/Atom/Input";
import ButtonEnum from "../../UI_KIT/Atom/Button/enum";
import { InputTypeEnum } from "../../UI_KIT/Atom/Input/enum";
import * as ST from "./styled/index";
import Text from "../../UI_KIT/Atom/Text";
import TextEnum from "../../UI_KIT/Atom/Text/enum";


export interface ModalAddProjectProps {
  handleAddProject?: () => void;
  changeInputTitle: string;
  setChangeInputTitle: Dispatch<SetStateAction<string>>;
  changeInputDesciption: string;
  setChangeInputDesciption: Dispatch<SetStateAction<string>>;
  onClose?: () => void;
}

const ModalAddProject: React.FC<ModalAddProjectProps> = (props: ModalAddProjectProps) => {
  const {
    handleAddProject,
    changeInputDesciption,
    setChangeInputDesciption,
    onClose,
    changeInputTitle,
    setChangeInputTitle,
  } = props;
  return (
    <ST.ModalWrapper>
      <ST.ModalBackground onClick={onClose}></ST.ModalBackground>
      <ST.Container>
        <Text type={TextEnum.enum_Text_H3} children="Create a Project" />

        <ST.BlockItems>
          <Text type={TextEnum.enum_Text_H4} children="Project Title" />
          <ST.BlockItemsText>
            <Input
              type={InputTypeEnum.TEXT}
              placeholder="Title"
              value={changeInputTitle}
              onChange={setChangeInputTitle}
            />
          </ST.BlockItemsText>
        </ST.BlockItems>

        <ST.BlockItems>
          <Text type={TextEnum.enum_Text_H4} children="Project Description" />
          <ST.BlockItemsText>
            <Input
              type={InputTypeEnum.TEXT}
              placeholder="Description"
              value={changeInputDesciption}
              onChange={setChangeInputDesciption}
            />
          </ST.BlockItemsText>
        </ST.BlockItems>

        <Button
          onClick={handleAddProject}
          type={ButtonEnum.enum_signupButton}
          children="Add Project"
        />
      </ST.Container>
    </ST.ModalWrapper>
  );
};
export default ModalAddProject;
