import {
  Todo,
  ICommonComponentProps,
} from "../../../../user.InterfaceLayer/constants/commonComponentProps";
import { TodoActions } from "./type";

export interface TodoState {
  todos: Todo[]; // Уточнение типа Todo[]
  subTodos: ICommonComponentProps["subTodos"]; // Уточнение типа SubTodo[]
}

const initialState: TodoState = {
  todos: [],
  subTodos: [],
};

const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.todos,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...(state.todos || []), ...(action.payload.todos || [])],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: (state.todos ?? []).filter((todo) => todo._id !== action.payload.todoId),
      };
    case "UPDATE_TODO_STATUS":
      return {
        ...state,
        todos: state.todos?.map((todo) =>
          todo._id === action.payload.todoId
            ? { ...todo, status: action.payload.newStatus }
            : todo
        ),
      };
    case "UPDATE_TODO_ORDER":
      return {
        ...state,
        todos: action.payload.todos,
      };
    case "EDIT_TODO_TITLE":
      return {
        ...state,
        todos: (state.todos ?? []).map((todo) =>
          todo._id === action.payload.todoId
            ? { ...todo, title: action.payload.newTitle }
            : todo
        ),
      };
    case "ADD_SUB_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.todoId
            ? { ...todo, subTodos: action.payload.subTodos || [] }
            : todo
        ),
      };
    case "UPDATE_SUB_TODO_TITLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload.todoId
            ? {
                ...todo,
                subTodos: todo.subTodos.map((sub) =>
                  sub._id === action.payload.subTodoId
                    ? { ...sub, title: action.payload.title }
                    : sub
                ),
              }
            : todo
        ),
      };
    case "UPDATE_SUB_TODO_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload.todoId
            ? {
                ...todo,
                subTodos: todo.subTodos.map((sub) =>
                  sub._id === action.payload.subTodoId
                    ? { ...sub, status: action.payload.status }
                    : sub
                ),
              }
            : todo
        ),
      };
    case "DELETE_SUB_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload.todoId
            ? {
                ...todo,
                subTodos: todo.subTodos.filter(
                  (sub) => sub._id !== action.payload.subTodoId
                ),
              }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
