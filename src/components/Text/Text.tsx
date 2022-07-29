import React, { Children } from "react";
import styled from "styled-components";
import { Colors, FontSizes } from "../../enums/enums";

interface TextProps {
  color?: Colors;
  fontSize?: FontSizes;
  horizontalLayer?: number;
  textAlign?: "left" | "center" | "right" | "justified";
  transform?: "lowercase" | "normal" | "uppercase";
  type?: "header" | "subHeader" | "subSubHeader" | "normal";
  weight?: "normal" | "bold";
}

const Text: React.FC<TextProps> = ({
  color,
  fontSize,
  horizontalLayer = 0,
  textAlign,
  transform,
  type,
  weight,
  children,
}) => {
  const Paragraph = styled.p`
    color: ${color ?? Colors.Gray3};
    font-family: "Roboto", sans-serif;
    font-weight: ${weight ?? "normal"};
    font-size: ${fontSize ?? "13px"};
    text-align: ${textAlign ?? "left"};
    text-transform: ${transform ?? "none"};
    margin-left: ${horizontalLayer}em;
  `;

  const Header = styled(Paragraph)`
    font-family: "Rockwell Nova", sans-serif;
    text-align: center;
    font-size: ${fontSize ?? FontSizes.ExtraLarge};
    text-transform: ${transform ?? "uppercase"};
    text-align: ${textAlign ?? "center"};
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
