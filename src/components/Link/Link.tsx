import React from "react";
import styled from "styled-components";
import { Colors } from "../../enums/enums";

interface LinkProps {
  source: string;
  color?: Colors;
  underline?: boolean;
}

const Link: React.FC<LinkProps> = ({
  source,
  color = Colors.Black,
  underline = true,
  children,
}) => {
  const Anchor = styled.a`
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
