import React from "react";
import * as ST from "./styled/styled";
import ImageEnum from "./enum";
import { IImagePropsDefault } from "./mock";
import { ImageType } from "./type";

const Image: React.FC<ImageType> = (props: ImageType) => {
  const { children, type, icon, isLoading, background, src, onClick } = props;
  if (isLoading) return <>Loading</>;
  switch (type) {
    case ImageEnum.enum_defaultImage: {
      return <ST.DefaultImage icon={icon} isLoading={isLoading} src={src} />;
    }
    case ImageEnum.enum_defaultSvg: {
      return (
        <ST.DefaultSvg onClick={onClick} isLoading={isLoading}>
          {icon}
        </ST.DefaultSvg>
      );
    }
    case ImageEnum.enum_svgImage: {
      return (
        <ST.SvgImage
          isLoading={isLoading}
          dangerouslySetInnerHTML={{ __html: children as string }}
        />
      );
    }
    case ImageEnum.enum_backgroundImage: {
      return <ST.BackgroundImage isLoading={isLoading} background={background} />;
    }
    default: {
      return <ST.Image>Ошибка</ST.Image>;
    }
  }
};

Image.defaultProps = IImagePropsDefault;
export default Image;
