import React from "react";
import styled from "styled-components";
import { Colors, FontSizes } from "../../enums/enums";
import { ContainerProps } from "../Container/Container";

export interface ButtonProps extends ContainerProps {
  action: () => void;
  color?: Colors;
  fontSize?: FontSizes;
  fontWeight?: "normal" | "bold";
  hoverBackgroundColor?: Colors;
  hoverColor?: Colors;
}

const Button: React.FC<ButtonProps> = ({
  action,
  display = "block",
  backgroundColor = Colors.Gray3,
  borderColor,
  borderRadius = "6px",
  borderStyle,
  borderWidth = "1px",
  color = Colors.White,
  children,
  fontSize = FontSizes.Large,
  fontWeight = "normal",
  height,
  hoverBackgroundColor = Colors.Gray5,
  hoverColor,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  orientation = "left",
  paddingBottom = "10px",
  paddingLeft = "10px",
  paddingRight = "10px",
  paddingTop = "10px",
  width,
}) => {
  const left =
    orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const Button = styled.button`
    display: ${display};
    position: relative;
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    border-radius: ${borderRadius};
    border-style: ${borderStyle};
    border-width: ${borderWidth};
    color: ${color};
    font-family: "Rockwell Nova", sans-serif;
    font-size: ${fontSize};
    font-weight: ${fontWeight};
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
    cursor: pointer;

    &:hover {
        background-color: ${hoverBackgroundColor};
        color: ${hoverColor};
    }
  `;

  return <Button onClick={action}>{children}</Button>;
};

export default Button;
