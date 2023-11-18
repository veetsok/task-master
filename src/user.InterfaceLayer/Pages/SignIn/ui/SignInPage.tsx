import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../../business.InterfaceLayer/store/actions/authActions";
import * as ST from "../style/index";
import Button from "../../../UI_KIT/Atom/Button";
import Input from "../../../UI_KIT/Atom/Input";
import { RootState } from "../../../../business.InterfaceLayer/store/reducers/rootReducer";
import ButtonEnum from "../../../UI_KIT/Atom/Button/enum";
import { InputTypeEnum } from "../../../UI_KIT/Atom/Input/enum";
import { Navigate } from "react-router-dom";

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <ST.Container>
      <form action="" onSubmit={handleSubmit}>
        <ST.Input>
          <Input
            value={creds.email}
            type={InputTypeEnum.EMAIL}
            onChange={(newEmail) => setCreds({ ...creds, email: newEmail })}
            placeholder="Enter e-mail"
          />
        </ST.Input>
        <ST.Input>
          <Input
            type={InputTypeEnum.PASSWORD}
            value={creds.password}
            onChange={(newPassword) => setCreds({ ...creds, password: newPassword })}
            placeholder="Enter password"
          />
        </ST.Input>

        <Button type={ButtonEnum.enum_defaultButton} children="Log in" />
      </form>
    </ST.Container>
  );
};
export default SignInPage;
