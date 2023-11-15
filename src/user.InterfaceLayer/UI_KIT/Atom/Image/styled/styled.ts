import styled from "styled-components";
import { ImageType } from "../type";

interface Image {
  isLoading?: ImageType["isLoading"];
  icon?: ImageType["icon"];
  background?: ImageType["background"];
}

export const DefaultImage = styled.img<Image>`
  width: 100%;
`;

export const SvgImage = styled.div<Image>``;
export const DefaultSvg = styled.div<Image>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 100%;
    height: 100%;
  }
  .rotate-on-hover {
    transition: transform 0.3s;
  }
  .rotate-on-hover:hover {
    transform: rotate(180deg);
  }
`;

export const BackgroundImage = styled.div<Image>`
  background: ${(props) =>
    props.background ? `url(${props.background})  50% / cover no-repeat;` : "none"};
  width: 100%;
  height: 100%;
`;

export const Image = styled.div<Image>``;
