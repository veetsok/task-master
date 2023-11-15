import React, { ReactNode } from "react";
export interface Project {
  date: string;
  description: string;
  title: ProjectTitle;
  todoList: Todo[];
  uid: string;
  __v: number;
  _id: ProjectId;
}

export interface Todo {
  comments: string[];
  createDate: string;
  description: string;
  dueDate: string;
  files: string[];
  priority: string;
  project: ProjectId;
  projectTitle: ProjectTitle;
  status: string;
  statusHistory: [];
  subTodos: SubTodo[];
  tags: [];
  timeInWork: number;
  title: string;
  __v: number;
  _id: TodoId;
  order: number;
}

export interface SubTodo {
  title: string;
  status: boolean;
  _id: SubTodoId;
}

export type ProjectId = string;
export type ProjectTitle = string;
export type TodoId = string;
export type SubTodoId = string;

export enum CommonComponentsProps {
  value = "value",
  onClick = "onClick",
  placeholder = "placeholder",
  icon = "icon",
  children = "children",
  className = "className",
  maxLength = "maxLength",
  max = "max",
  isError = "isError",
  isLoading = "isLoading",
  onChange = "onChange",
  autoFocus = "autoFocus",
  required = "required",
  disabled = "disabled",
  background = "background",
  src = "src",
  key = "key",
  project = "project",
  projects = "projects",
  todos = "todos",
  Todo = "Todo",
  ProjectId = "ProjectId",
  SubTodoId = "SubTodoId",
  TodoId = "TodoId",
  subTodos = "subTodos",
  ProjectTitle = "ProjectTitle",
}

export interface ICommonComponentProps {
  [CommonComponentsProps.value]?: string | number | undefined;
  [CommonComponentsProps.onClick]?: () => void;
  [CommonComponentsProps.placeholder]?: string;
  [CommonComponentsProps.icon]?: JSX.Element | React.ReactNode;
  [CommonComponentsProps.children]?: JSX.Element | ReactNode;
  [CommonComponentsProps.className]?: string;
  [CommonComponentsProps.maxLength]?: number;
  [CommonComponentsProps.max]?: number;
  [CommonComponentsProps.isError]?: boolean;
  [CommonComponentsProps.isLoading]?: boolean;
  [CommonComponentsProps.onChange]?: () => void;
  [CommonComponentsProps.autoFocus]?: boolean;
  [CommonComponentsProps.required]?: boolean;
  [CommonComponentsProps.disabled]?: boolean;
  [CommonComponentsProps.background]?: string;
  [CommonComponentsProps.src]?: string;
  [CommonComponentsProps.key]?: number;
  [CommonComponentsProps.ProjectTitle]?: ProjectTitle;
  [CommonComponentsProps.TodoId]?: TodoId;
  [CommonComponentsProps.ProjectId]?: ProjectId;
  [CommonComponentsProps.projects]?: Project[];
  [CommonComponentsProps.project]?: Project;
  [CommonComponentsProps.todos]?: Todo[];
  [CommonComponentsProps.subTodos]?: SubTodo[];
  [CommonComponentsProps.SubTodoId]?: SubTodoId;
  [CommonComponentsProps.Todo]?: Todo;
}