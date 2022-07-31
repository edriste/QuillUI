import React from "react";
import styled from "styled-components";
import { Colors } from "../../enums/enums";
import { ContainerProps } from "../Container/Container";

interface LinkProps extends ContainerProps {
  source: string;
  color?: Colors;
  underline?: boolean;
}

const Link: React.FC<LinkProps> = ({
  display = "inline",
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  height,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  orientation = "left",
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  width,
  source,
  color = Colors.Black,
  underline = true,
  children,
}) => {
  const left =
    orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const Anchor = styled.a`
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
    box-sizing: border-box;
    text-decoration: none;
    color: ${color};
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    border-bottom: ${underline ? "1px solid " + color : "none"};

    &:hover {
      opacity: 0.75;
      transition: opacity 200ms;
    }
  `;

  return <Anchor href={source}>{children}</Anchor>;
};

export default Link;
