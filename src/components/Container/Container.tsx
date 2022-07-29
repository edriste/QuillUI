import React from "react";
import styled from "styled-components";
import { Colors } from "../../enums/enums";

export interface ContainerProps {
  width?: string;
  height?: string;
  borderStyle?:
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
    | "none"
    | "hidden";
  borderColor?: Colors;
  backgroundColor?: Colors;
  borderWidth?: string;
  borderRadius?: string;
  padding?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  orientation?: "left" | "center" | "right";
}

const Container: React.FC<ContainerProps> = ({
  backgroundColor,
  borderColor,
  borderRadius = "8px",
  borderStyle,
  borderWidth = "1px",
  children,
  height,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  orientation = "center",
  padding = "10px",
  width,
}) => {
  const left =
    orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const ContainerDiv = styled.div`
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

  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
