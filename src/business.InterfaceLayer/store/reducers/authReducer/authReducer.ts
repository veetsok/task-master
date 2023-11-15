import { toast } from "react-toastify";
import jwtDecode from "jwt-decode"; // Примечание: я добавил JwtPayload для типизации jwtDecode
import { AuthAction, AuthState, CustomJwtPayload } from "./type";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      if (action.token) {
        const user = jwtDecode<CustomJwtPayload>(action.token);
        return {
          ...initialState,
          token: action.token,
          name: user.name,
          email: user.email as string,
          _id: user._id as string,
        };
      }
      return state;
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Вы вышли", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
