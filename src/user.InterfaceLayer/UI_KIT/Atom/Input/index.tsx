import React, { useCallback } from "react";
import { IInputProps } from "./type";
import * as ST from "./styled";
import { InputPropsDefaultProps, dataTestId } from "./const";
import { InputTypeEnum } from "./enum";
import { InputMask, checkType } from "./utils";

const Input: React.FC<IInputProps> = (props: IInputProps) => {
  if (props.isError) return <ST.Error>Произошла ошибка</ST.Error>;

  const { value, onChange, type, placeholder, isLoading, autoFocus, ...otherProps } =
    props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(InputMask(type, e.target.value));
    },
    [onChange, type]
  );

  return (
    <>
      {isLoading ? (
        <ST.Skeleton />
      ) : (
        <ST.InputStyle
          data-testid={dataTestId}
          autoFocus={autoFocus}
          value={value || ""}
          type={checkType(type) ? InputTypeEnum.TEXT : type}
          onInput={onChangeHandler}
          placeholder={placeholder}
          {...otherProps}
        />
      )}
    </>
  );
};
Input.defaultProps = InputPropsDefaultProps;

export default Input;
