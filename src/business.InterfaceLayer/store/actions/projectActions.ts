import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { setHeaders, url } from "../../api";
import { RootState } from "../reducers/rootReducer";
import { ProjectId } from "../../../user.InterfaceLayer/constants/commonComponentProps";

export const getProjects = () => {
  return (dispatch: Dispatch) => {
    axios
      .get(`${url}/projects`, setHeaders())
      .then((response) => {
        dispatch({
          type: "GET_PROJECTS",
          payload: {
            project: response.data,
          },
        });
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
};

export const addProject = (title: string, description: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const author = getState().auth.email;
    const uid = getState().auth._id;
    axios
      .post(`${url}/projects`, { title, description, author, uid }, setHeaders())
      .then((response: AxiosResponse) => {
        dispatch({
          type: "ADD_PROJECT",
          payload: {
            project: response.data,
          },
        });
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
};

export const deleteProject = (projectId: ProjectId) => {
  return (dispatch: Dispatch) => {
    axios
      .delete(`${url}/projects/${projectId}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_PROJECT",
          payload: {
            project: projectId,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};