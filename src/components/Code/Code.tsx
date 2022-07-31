import React from "react";
import styled from "styled-components";
import { Colors } from "../../enums/enums";
import { ContainerProps } from "../Container/Container";

interface CodeProps extends ContainerProps {
  content: string;
  lineIndexColor?: Colors;
  lineIndexSeparatorColor?: Colors;
  codeLineColor?: Colors;
  commentColor?: Colors;
  scrollBarTrackColor?: Colors;
  scrollBarThumbColor?: Colors;
  scrollBarThumbHoverColor?: Colors;
}

const Code: React.FC<CodeProps> = ({
  backgroundColor = Colors.Gray3,
  borderColor = Colors.Gray3,
  borderRadius = "8px",
  borderStyle = "solid",
  borderWidth = "2px",
  content,
  display = "block",
  codeLineColor = Colors.White,
  commentColor = Colors.Gray8,
  lineIndexColor = Colors.Gray8,
  lineIndexSeparatorColor = Colors.Gray8,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  orientation = "left",
  paddingBottom = "0",
  paddingLeft = "8px",
  paddingRight = "8px",
  paddingTop = "8px",
  scrollBarTrackColor = Colors.Gray6,
  scrollBarThumbColor = Colors.Gray1,
  scrollBarThumbHoverColor = Colors.Gray2,
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
    display: ${display};
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
    box-sizing: border-box;
  `;

  const CodeContentWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: flex-start;
    gap: 0px 10px;
  `;

  const IndexCol = styled.div`
    flex: 0 0 ${codeLineIndexWidth}px;
  `;

  const ContentCol = styled.div`
    padding-bottom: 8px;
    flex: 0 0 calc(100% - ${codeLineIndexWidth + 10}px);
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: ${scrollBarTrackColor};
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${scrollBarThumbColor};
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${scrollBarThumbHoverColor};
    }
  `;

  const CodeLineIndex = styled.div`
    color: ${lineIndexColor};
    border-right: 1px solid ${lineIndexSeparatorColor};
    box-sizing: border-box;
  `;

  const CodeLineContent = styled.span`
    box-sizing: border-box;
    color: ${codeLineColor};
  `;

  const Pre = styled.pre`
    margin: 0;
  `;

  console.log(codeArray);

  return (
    <CodeBox>
      <CodeContentWrapper>
        <IndexCol>
          {codeArray?.map((codeLine, i) => (
            <CodeLineIndex>
              <Pre>{i+1}</Pre>
            </CodeLineIndex>
          ))}
        </IndexCol>
        <ContentCol>
          {codeArray?.map((codeLine) => (
            <CodeLineContent
              style={{
                color:
                  codeLine.substring(0, 2) === "//"
                    ? commentColor
                    : codeLineColor,
              }}
            >
              <Pre>{codeLine === "" ? "\n" : codeLine}</Pre>
            </CodeLineContent>
          ))}
        </ContentCol>
      </CodeContentWrapper>
    </CodeBox>
  );
};

export default Code;
