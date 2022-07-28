import React, { ReactChild, ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "../../enums/enums";

interface CodeProps {
  width?: string | number;
  orientation?: "left" | "center" | "right";
}

const Code: React.FC<CodeProps> = (props) => {
  const codeArray = props.children?.toString().split("\n");

  const left =
    props.orientation === "center"
      ? 50
      : props.orientation === "right"
      ? 100
      : 0;

  const CodeBox = styled.div`
    background-color: ${Colors.Gray2};
    border-radius: 2px;
    position: relative;
    width: ${props.width}%;
    padding: 10px;
    left: ${left}%;
    transform: translateX(-50%);
  `;

  const CodeLine = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: flex-start;
    gap: 0px 10px;
  `;

  const CodeLineIndex = styled.span`
    flex: 0 0 ${20 * (codeArray ? codeArray.length.toString().length : 1)}px;
    color: ${Colors.Gray7};
    border-right: 1px solid ${Colors.Gray7};
  `;

  const CodeLineContent = styled.span`
    flex: 0 0 calc(100% - 41px);
    color: ${Colors.White};
  `;

  return (
    <CodeBox>
      {codeArray?.map((codeLine, i) => {
        return (
          <CodeLine>
            <CodeLineIndex>{i + 1}</CodeLineIndex>
            <CodeLineContent>{codeLine}</CodeLineContent>
          </CodeLine>
        );
      })}
    </CodeBox>
  );
};

export default Code;
