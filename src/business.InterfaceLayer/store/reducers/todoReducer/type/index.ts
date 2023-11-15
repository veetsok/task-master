import { ICommonComponentProps } from "../../../../../user.InterfaceLayer/constants/commonComponentProps";

export interface GetTodosAction {
  type: "GET_TODOS";
  todos: ICommonComponentProps["todos"];
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todos: ICommonComponentProps["todos"];
  };
}
export interface AddTodoAction {
  type: "ADD_TODO";
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todos: ICommonComponentProps["todos"]; // Allow todos to be Todo[] or undefined
  };
}
export interface DeleteTodoAction {
  type: "DELETE_TODO";
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todoId: ICommonComponentProps["TodoId"]; // Use todoId instead of todos
  };
}
export interface UpdateTodoStatusAction {
  type: "UPDATE_TODO_STATUS";
  payload: {
    todoId: ICommonComponentProps["TodoId"];
    newStatus: string;
  };
}
export interface UpdateTodoOrderAction {
  type: "UPDATE_TODO_ORDER";
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todos: ICommonComponentProps["todos"];
  };
}
export interface EditTodoTitleAction {
  type: "EDIT_TODO_TITLE";
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todoId: ICommonComponentProps["TodoId"];
    newTitle: string;
  };
}

export interface AddSubTodoAction {
  type: "ADD_SUB_TODO";
  todoId: ICommonComponentProps["TodoId"];
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todoId: ICommonComponentProps["TodoId"];
    subTodos: ICommonComponentProps["subTodos"];
  };
}

export interface UpdateSubTodoTitleAction {
  type: "UPDATE_SUB_TODO_TITLE";
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todoId: ICommonComponentProps["TodoId"];
    subTodoId: ICommonComponentProps["SubTodoId"];
    title: string;
  };
}

export interface UpdateSubTodoStatusAction {
  type: "UPDATE_SUB_TODO_STATUS";
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todoId: ICommonComponentProps["TodoId"];
    subTodoId: ICommonComponentProps["SubTodoId"];
    status: string;
  };
}

export interface DeleteSubTodoAction {
  type: "DELETE_SUB_TODO";
  payload: {
    projectId: ICommonComponentProps["ProjectId"];
    todoId: ICommonComponentProps["TodoId"];
    subTodoId: ICommonComponentProps["SubTodoId"];
  };
}

export type TodoActions =
  | GetTodosAction
  | AddTodoAction
  | UpdateTodoStatusAction
  | UpdateTodoOrderAction
  | DeleteTodoAction
  | EditTodoTitleAction
  | AddSubTodoAction
  | UpdateSubTodoTitleAction
  | UpdateSubTodoStatusAction
  | DeleteSubTodoAction;
