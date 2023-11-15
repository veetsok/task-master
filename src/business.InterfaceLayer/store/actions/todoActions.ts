import axios from "axios";
import { setHeaders, url } from "../../api";
import { Dispatch } from "redux";
import {
  ProjectId,
  TodoId,
  SubTodoId,
} from "../../../user.InterfaceLayer/constants/commonComponentProps";


export const getTodos = (projectId: ProjectId) => {
  return (dispatch: Dispatch) => {
    axios
      .get(`${url}/projects/${projectId}/todos`, setHeaders())
      .then((response) => {
        dispatch({
          type: "GET_TODOS",
          projectId,
          todos: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const addTodo = (
  projectId: ProjectId,
  title: string,
  description: string,
  dueDate: string,
  timeInWork: string,
  priority: string
) => {
  return (dispatch: Dispatch) => {
    axios
      .post(
        `${url}/projects/${projectId}/todos`,
        { title, description, dueDate, timeInWork, priority },
        setHeaders()
      )
      .then((response) => {
        const newTodos = Array.isArray(response.data) ? response.data : [response.data];
        dispatch({
          type: "ADD_TODO",
          payload: {
            projectId,
            todos: newTodos,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const deleteTodo = (projectId: ProjectId, todoId: TodoId) => {
  return (dispatch: Dispatch) => {
    axios
      .delete(`${url}/projects/${projectId}/todos/${todoId}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          payload: {
            projectId,
            todoId,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const updateTodoStatus = (
  projectId: ProjectId,
  todoId: TodoId,
  newStatus: string
) => {
  return (dispatch: Dispatch) => {
    axios
      .put(
        `${url}/projects/${projectId}/todos/${todoId}`,
        { status: newStatus },
        setHeaders()
      )
      .then(() => {
        dispatch({
          type: "UPDATE_TODO_STATUS",
          payload: {
            todoId,
            newStatus,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const updateTodoOrder = (projectId: ProjectId, reorderedTasks: string) => {
  return (dispatch: Dispatch) => {
    axios
      .put(`${url}/projects/${projectId}/todos/order`, reorderedTasks, setHeaders())
      .then((response) => {
        dispatch({
          type: "UPDATE_TODO_ORDER",
          payload: {
            projectId,
            todos: response.data,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const editTodoTitle = (projectId: ProjectId, todoId: TodoId, newTitle: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(
        `${url}/projects/${projectId}/todos/${todoId}`,
        { title: newTitle },
        setHeaders()
      );
      dispatch({
        type: "EDIT_TODO_TITLE",
        payload: {
          projectId,
          todoId,
          newTitle: response.data.title,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const addSubTodo = (projectId: ProjectId, todoId: TodoId, title: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        `${url}/projects/${projectId}/todos/${todoId}/subtodos`,
        { title },
        setHeaders()
      );
      dispatch({
        type: "ADD_SUB_TODO",
        payload: {
          projectId,
          todoId,
          subTodos: response.data.subTodos,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteSubTodo = (
  projectId: ProjectId,
  todoId: TodoId,
  subTodoId: SubTodoId
) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(
        `${url}/projects/${projectId}/todos/${todoId}/subtodos/${subTodoId}`,
        setHeaders()
      );
      dispatch({
        type: "DELETE_SUB_TODO",
        payload: {
          todoId,
          subTodoId,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateSubTodoTitle = (
  projectId: ProjectId,
  todoId: TodoId,
  subTodoId: SubTodoId,
  title: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(
        `${url}/projects/${projectId}/todos/${todoId}/subtodos/${subTodoId}/title`,
        { title },
        setHeaders()
      );
      dispatch({
        type: "UPDATE_SUB_TODO_TITLE",
        payload: {
          todoId,
          subTodoId,
          title: response.data.title,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateSubTodoStatus = (
  projectId: ProjectId,
  todoId: TodoId,
  subTodoId: SubTodoId,
  status: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.put(
        `${url}/projects/${projectId}/todos/${todoId}/subtodos/${subTodoId}`,
        { status },
        setHeaders()
      );
      dispatch({
        type: "UPDATE_SUB_TODO_STATUS",
        payload: {
          todoId,
          subTodoId,
          status,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
};