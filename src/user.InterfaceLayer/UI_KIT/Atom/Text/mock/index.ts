import TextEnum from "../enum";

const TextMock = {
  children: "Демо",
  type: TextEnum.enum_Text_H1,
};

export default TextMock;

export const ITextPropsDefault = {
  children: TextMock.children,
  type: TextMock.type,
};
