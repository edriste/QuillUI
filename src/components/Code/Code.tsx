import React from "react";
import styled from "styled-components";
import { Colors } from "../../enums/enums";
import { ContainerProps } from "../Container/Container";

interface CodeProps extends ContainerProps {
  lineIndexColor?: Colors;
  lineIndexSeparatorColor?: Colors;
  codeLineColor?: Colors;
  content: string;
}

const Code: React.FC<CodeProps> = ({
  backgroundColor = Colors.Gray2,
  borderColor,
  borderRadius = "8px",
  borderStyle,
  borderWidth,
  content,
  codeLineColor = Colors.White,
  lineIndexColor = Colors.Gray6,
  lineIndexSeparatorColor = Colors.Gray6,
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
  let initialIndent = 0;
  const trimmedContent = content.trim();

  for (
    let i = 0;
    i < content.length && content.charAt(i) !== trimmedContent.charAt(0);
    i++
  ) {
    if (content.substring(i, i + 1) === " ") {
      initialIndent++;
    }
  }

  let initialTabCheckString = "";
  for (let j = 0; j < initialIndent; j++) {
    initialTabCheckString += " ";
  }

  const codeArray = content
    .trim()
    .replaceAll(initialTabCheckString, "")
    .replaceAll(",\t", "\t")
    .replaceAll("\t,", "\t")
    .replaceAll("\t", "   ")
    .replaceAll(",\n", "\n")
    .replaceAll("\n,", "\n")
    .split("\n");

  const codeArrayLengthDigits = codeArray
    ? codeArray.length.toString().length
    : 1;
  const codeLineIndexWidth = 10 + 7 * codeArrayLengthDigits;

  const left =
    orientation === "center" ? 50 : orientation === "right" ? 100 : 0;

  const CodeBox = styled.div`
    background-color: ${backgroundColor};
    border-style: ${borderStyle};
    border-color: ${borderColor};
    border-width: ${borderWidth};
    border-radius: ${borderRadius};
    position: relative;
    width: ${width};
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    padding-top: ${paddingTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    margin-top: ${marginTop};
    left: ${left}%;
    transform: translateX(-${left}%);
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
    flex: 0 0 ${codeLineIndexWidth}px;
    color: ${lineIndexColor};
    border-right: 1px solid ${lineIndexSeparatorColor};
  `;

  const CodeLineContent = styled.span`
    flex: 0 0 calc(100% - ${codeLineIndexWidth + 11}px);
    color: ${codeLineColor};
  `;

  const Pre = styled.pre`
    margin: 0;
  `;

  return (
    <CodeBox>
      {codeArray?.map((codeLine, i) => (
        <CodeLine>
          <CodeLineIndex>
            <Pre>{i + 1}</Pre>
          </CodeLineIndex>
          <CodeLineContent>
            <Pre>{codeLine}</Pre>
          </CodeLineContent>
        </CodeLine>
      ))}
    </CodeBox>
  );
};

export default Code;
