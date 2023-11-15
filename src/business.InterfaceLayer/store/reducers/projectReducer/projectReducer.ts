import { Project } from "../../../../user.InterfaceLayer/constants/commonComponentProps";
import { ProjectActions } from "./type";
export interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectReducer = (state = initialState, action: ProjectActions) => {
  switch (action.type) {
    case "GET_PROJECTS": {
      return {
        ...state,
        projects: action.payload.project,
      };
    }
    case "ADD_PROJECT": {
      return {
        ...state,
        projects: [...state.projects, action.payload.project],
      };
    }
    case "DELETE_PROJECT": {
      return {
        ...state,
        projects:
          state.projects?.filter(
            (project) => project._id !== (action.payload.project ?? "")
          ) || [],
      };
    }
    default:
      return state;
  }
};

export default projectReducer;
