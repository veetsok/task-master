import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer/authReducer";
import projectReducer, { ProjectState } from "./projectReducer/projectReducer";
import todoReducer, { TodoState } from "./todoReducer/todoReducer";
import { AuthState } from "./authReducer/type";

export interface RootState {
  auth: AuthState;
  todo: TodoState;
  project: ProjectState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  project: projectReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
