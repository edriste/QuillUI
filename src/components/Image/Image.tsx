import React from "react";
import styled from "styled-components";
import { ContainerProps } from "../Container/Container";

interface ImageProps extends ContainerProps {
  source: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({
  alt,
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth = "1px",
  height,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  orientation = "center",
  padding,
  source,
  width,
}) => {
  const left =
    orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const Img = styled.img`
    position: relative;
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    border-radius: ${borderRadius};
    border-style: ${borderStyle};
    border-width: ${borderWidth};
    height: ${height};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    margin-top: ${marginTop};
    padding: ${padding};
    width: ${width};
    left: ${left}%;
    transform: translateX(-${left}%);
  `;

  return <Img src={source} alt={alt}></Img>;
};

export default Image;
