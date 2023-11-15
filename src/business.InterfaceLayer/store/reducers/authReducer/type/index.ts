import { JwtPayload } from "jwt-decode";

export interface AuthState {
  token: string | null;
  name: string | null;
  email: string | null;
  _id: string | null;
}

export interface AuthAction {
  type: string;
  token?: string;
}
export interface CustomJwtPayload extends JwtPayload {
  name: string;
  email: string;
  _id: string;
}
