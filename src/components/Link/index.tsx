import React from "react";
import styled from "styled-components";
import { Colors } from "../../enums";

interface LinkProps {
  source: string;
  color?: Colors;
  underline?: boolean;
}

const Link: React.FC<LinkProps> = ({ source, color, underline, children }) => {
  const Anchor = styled.a`
    tect.decoration: none;
    color: ${color ?? Colors.Black};
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    border-bottom: ${underline ? "1px solid " + color ?? Colors.Black : "none"};

    &:hover {
      opacity: 0.75;
      transition: opacity 200ms;
    }
  `;

  return <Anchor href={source}>{children}</Anchor>;
};

export default Link;
