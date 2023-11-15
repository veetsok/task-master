import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../../business.InterfaceLayer/store/actions/authActions";
import * as ST from "../style/index";
import Input from "../../../UI_KIT/Atom/Input";
import Button from "../../../UI_KIT/Atom/Button";
import { RootState } from "../../../../business.InterfaceLayer/store/reducers/rootReducer";
import ButtonEnum from "../../../UI_KIT/Atom/Button/enum";
import { InputTypeEnum } from "../../../UI_KIT/Atom/Input/enum";


interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) {
    navigate("/");
    return null;
  }

  return (
    <ST.Container>
      <form onSubmit={handleSubmit}>
        <ST.Input>
          <Input
            value={user.name}
            onChange={(nameUser) => setUser({ ...user, name: nameUser })}
            placeholder="Enter your name"
            type={InputTypeEnum.TEXT}
          />
        </ST.Input>
        <ST.Input>
          <Input
            value={user.email}
            onChange={(emailUser) => setUser({ ...user, email: emailUser })}
            placeholder="Enter your e-mail"
            type={InputTypeEnum.EMAIL}
          />
        </ST.Input>
        <ST.Input>
          <Input
            value={user.password}
            onChange={(passwordUser) => setUser({ ...user, password: passwordUser })}
            placeholder="Enter your password"
            type={InputTypeEnum.PASSWORD}
          />
        </ST.Input>

        <Button type={ButtonEnum.enum_signupButton} children="Sign Up" />
      </form>
    </ST.Container>
  );
};
export default SignUpPage;
