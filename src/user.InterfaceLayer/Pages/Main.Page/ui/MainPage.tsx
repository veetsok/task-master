import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
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
import EmptyProject from "../../../UI_KIT/Widgets/EmptyProject.widget";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [currentSlide] = useState(0);
  const [changeInputTitle, setChangeInputTitle] = useState("");
  const [changeInputDesciption, setChangeInputDesciption] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const auth = useSelector((state: RootState) => state.auth);
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
  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <ST.Container>
      <ST.ResetContainer>
        {projects.length > 0 ? (
          <>
            <Text type={TextEnum.enum_Text_H2} children="My projects" />
            <ST.ProjectContainer>
              {projects.map((project: Project, index: number) => (
                <ProjectWidget
                  key={project._id}
                  custom={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                  title={project.title}
                  description={project.description}
                  handleDeleteProject={() => handleDeleteProject(project._id)}
                  onClick={() =>
                    navigate(
                      `/projects/${project._id}/todos?title=${project.title}&description=${project.description}`
                    )
                  }
                />
              ))}
              <ST.AddProjectContainer>
                <AddProjectWidget onClick={openModal} />
              </ST.AddProjectContainer>
            </ST.ProjectContainer>
            <ST.AddProject>
              <AddProjectWidget onClick={openModal} />
            </ST.AddProject>
          </>
        ) : (
          <EmptyProject openModal={openModal} />
        )}
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
