import React from "react";

interface ImageProps {
  source: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

const Image: React.FC<ImageProps> = ({ source, alt, width, height }) => {
  return (
    <div>
      <img
        src={source}
        alt={alt}
        height={height}
        width={width}
      ></img>
    </div>
  );
};

export default Image;
