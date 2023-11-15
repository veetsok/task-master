import { ICommonComponentProps } from "../../../../../user.InterfaceLayer/constants/commonComponentProps";

export interface GetProjectsAction {
  type: "GET_PROJECTS";
  payload: {
    project: ICommonComponentProps["projects"];
  };
}

export interface AddProjectAction {
  type: "ADD_PROJECT";
  payload: {
    project: ICommonComponentProps["projects"];
  };
}
export interface DeleteProjectAction {
  type: "DELETE_PROJECT";
  payload: {
    project: ICommonComponentProps["project"];
  };
}

export type ProjectActions = GetProjectsAction | AddProjectAction | DeleteProjectAction;
