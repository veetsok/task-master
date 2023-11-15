import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as ST from "../style/index";
import {
  addProject,
  deleteProject,
  getProjects,
} from "../../../../business.InterfaceLayer/store/actions/projectActions";
import Text from "../../../UI_KIT/Atom/Text";
import TextEnum from "../../../UI_KIT/Atom/Text/enum";
import ProjectWidget from "../../../UI_KIT/Widgets/Project.widget";
import ModalAddProject from "../../../Components/ModalAddProject.component.bll";
import { RootState } from "../../../../business.InterfaceLayer/store/reducers/rootReducer";
import { ProjectId, Project } from "../../../constants/commonComponentProps";
import AddProjectWidget from "../../../UI_KIT/Widgets/AddProject.widget";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [changeInputTitle, setChangeInputTitle] = useState("");
  const [changeInputDesciption, setChangeInputDesciption] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const projects = useSelector((state: RootState) => state.project.projects);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddProject = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(addProject(changeInputTitle, changeInputDesciption));
    setChangeInputTitle("");
    setChangeInputDesciption("");
    closeModal();
  };
  const handleDeleteProject = (projectId: ProjectId) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(deleteProject(projectId));
  };

  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getProjects());
  }, [dispatch]);

  console.log(projects);

  return (
    <ST.Container>
      <ST.ResetContainer>
        <Text type={TextEnum.enum_Text_H2} children="My projects" />
        <ST.ProjectContainer>
          {projects.map((project: Project) => {
            return (
              <ProjectWidget
                key={project._id}
                title={project.title}
                description={project.description}
                handleDeleteProject={() => handleDeleteProject(project._id)}
                onClick={() =>
                  navigate(
                    `/projects/${project._id}/todos?title=${project.title}&description=${project.description}`
                  )
                }
              />
            );
          })}
          <AddProjectWidget onClick={openModal} />
        </ST.ProjectContainer>
        {isShowModal && (
          <ModalAddProject
            handleAddProject={handleAddProject}
            changeInputTitle={changeInputTitle}
            setChangeInputTitle={setChangeInputTitle}
            changeInputDesciption={changeInputDesciption}
            setChangeInputDesciption={setChangeInputDesciption}
            onClose={closeModal}
          />
        )}
      </ST.ResetContainer>
    </ST.Container>
  );
};
export default MainPage;
