enum Colors {
  RED = "#EC2020",
  DEFAULT = "#202020",
  BODY = "#ECEEEE",
  TRANSPARENT = "transparent",
  BLACK = "#000",
  WHITE = "#FFF",
  ORANGE = "#FB8B13",
  GRAY = "#707070",
  BG_WIDGET = "#F9F9F9",
  BG_WIDGETHOVER = "rgba(60, 69, 69, 0.15)",
  BORDER = "#dbdbdb",
  YELLOW = "#e6a603",
  GREEN = "#29B347",
}

export default Colors;

const root = document.documentElement;

root.style.setProperty("--body-color", Colors.BODY);