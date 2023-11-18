import React from "react";
import Button from "../../Atom/Button";
import ButtonEnum from "../../Atom/Button/enum";
import { ProjectWidgetProps } from "./type";
import * as ST from "./styled/index";
import Text from "../../Atom/Text";
import TextEnum from "../../Atom/Text/enum";
import Image from "../../Atom/Image";
import ImageEnum from "../../Atom/Image/enum";
import Close from "../../../shared/assets/icons/close.svg?react";

const ProjectWidget: React.FC<ProjectWidgetProps> = (props: ProjectWidgetProps) => {
  const { title, handleDeleteProject, custom, onClick, description, isLoading } = props;

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (handleDeleteProject) {
      handleDeleteProject();
    }
  };

  return (
    <>
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => <ST.Skeleton key={index} />)
      ) : (
        <ST.Container $customStyle={custom} onClick={onClick}>
          <Text type={TextEnum.enum_Text_H3} children={title} />
          <ST.IconBlock>
            <Text type={TextEnum.enum_Text_H6} children={description} />
          </ST.IconBlock>

          <ST.CloseBlock onClick={handleDeleteClick}>
            <Button type={ButtonEnum.enum_defaultButton}>
              <Image type={ImageEnum.enum_defaultSvg} icon={<Close />} />
            </Button>
          </ST.CloseBlock>
        </ST.Container>
      )}
    </>
  );
};
export default ProjectWidget;
