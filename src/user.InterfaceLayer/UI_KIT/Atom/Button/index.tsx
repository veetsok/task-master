import { FC } from "react";

import * as ST from "./styled/styled";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";
import { ButtonType } from "./type";

const Button: FC<ButtonType> = (props: ButtonType) => {
  const { children, onClick, type, isLoading } = props;
  if (isLoading) return <>Loading</>;
  switch (type) {
    case ButtonEnum.enum_logoutButton: {
      return (
        <ST.LogoutButton onClick={onClick} isLoading={isLoading} children={children} />
      );
    }
    case ButtonEnum.enum_loginButton: {
      return (
        <ST.LoginButton children={children} onClick={onClick} isLoading={isLoading} />
      );
    }
    case ButtonEnum.enum_signupButton: {
      return (
        <ST.SignupButton children={children} onClick={onClick} isLoading={isLoading} />
      );
    }
    case ButtonEnum.enum_defaultButton: {
      return (
        <ST.DefaultButton children={children} onClick={onClick} isLoading={isLoading} />
      );
    }
    default: {
      return <ST.Button>Ошибка</ST.Button>;
    }
  }
};

Button.defaultProps = IButtonPropsDefault;
export default Button;
