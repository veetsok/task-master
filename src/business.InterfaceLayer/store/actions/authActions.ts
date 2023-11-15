import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { RootState } from "../reducers/rootReducer";

export const signUp = (user: { name: string; email: string; password: string }) => {
  return (dispatch: Dispatch) => {
    axios
      .post(`${url}/signup`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    axios
      .post(`${url}/signin`, { email, password })
      .then((token) => {
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "CLEAR_TODOS",
    });

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const loadUser = () => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
