import React from "react";
import styled from "styled-components";

interface ImageProps {
  source: string;
  alt: string;
  width?: string;
  height?: string;
  orientation?: "left" | "center" | "right";
}

const Image: React.FC<ImageProps> = ({
  source,
  alt,
  width,
  height,
  orientation,
}) => {
  const left =
    orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const Img = styled.img`
    position: relative;
    height: ${height};
    width: ${width};
    left: ${left}%;
    transform: translateX(-${left}%);
  `;

  return (
    <div>
      <Img src={source} alt={alt}></Img>
    </div>
  );
};

export default Image;
