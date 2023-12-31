import { keyframes } from "styled-components";

const fade = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}
100% {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

`;

export default fade;
