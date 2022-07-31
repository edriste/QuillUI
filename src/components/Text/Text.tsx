import React from "react";
import styled from "styled-components";
import { Colors, FontSizes } from "../../enums/enums";
import { ContainerProps } from "../Container/Container";

interface TextProps extends ContainerProps {
  color?: Colors;
  fontSize?: FontSizes;
  horizontalLayer?: number;
  textAlign?: "left" | "center" | "right" | "justified";
  transform?: "lowercase" | "normal" | "uppercase";
  type?: "header" | "subHeader" | "subSubHeader" | "normal";
  weight?: "normal" | "bold";
}

const Text: React.FC<TextProps> = ({
  display = "block",
  backgroundColor,
  borderColor,
  borderRadius = "8px",
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
  color = Colors.Gray3,
  fontSize,
  textAlign = "left",
  transform,
  type,
  weight,
  children,
}) => {
  const left =
  orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const Paragraph = styled.p`
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
    color: ${color};
    font-family: "Roboto", sans-serif;
    font-weight: ${weight ?? "normal"};
    font-size: ${fontSize ?? "13px"};
    text-align: ${textAlign};
    text-transform: ${transform ?? "none"};
  `;

  const Header = styled(Paragraph)`
    font-family: "Rockwell Nova", sans-serif;
    text-align: ${textAlign};
    font-size: ${fontSize ?? FontSizes.ExtraLarge};
    text-transform: ${transform ?? "uppercase"};
  `;

  const SubHeader = styled(Header)`
    font-size: ${fontSize ?? FontSizes.VeryLarge};
  `;

  const SubSubHeader = styled(Paragraph)`
    font-size: ${fontSize ?? FontSizes.Large};
    font-weight: ${weight ?? "bold"};
  `;

  switch (type) {
    case "header":
      return <Header>{children}</Header>;
    case "subHeader":
      return <SubHeader>{children}</SubHeader>;
    case "subSubHeader":
      return <SubSubHeader>{children}</SubSubHeader>;
    default:
      return <Paragraph>{children}</Paragraph>;
  }
};

export default Text;
