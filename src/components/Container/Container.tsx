import React from "react";
import styled from "styled-components";
import { Colors } from "../../enums/enums";

export interface ContainerProps {
  display?: string;
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
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
}

const Container: React.FC<ContainerProps> = ({
  display,
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
  paddingBottom = "10px",
  paddingLeft = "10px",
  paddingRight = "10px",
  paddingTop = "10px",
  width,
}) => {
  const left =
    orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const ContainerDiv = styled.div`
    display: ${display};
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
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    padding-top: ${paddingTop};
    width: ${width};
    left: ${left}%;
    transform: translateX(-${left}%);
  `;

  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;