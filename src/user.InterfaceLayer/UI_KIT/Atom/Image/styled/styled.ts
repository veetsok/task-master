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
    props.background ? `no-repeat center/100% url(${props.background})` : "none"};
  width: 100%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Image = styled.div<Image>``;
