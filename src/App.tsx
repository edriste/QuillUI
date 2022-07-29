import React from "react";
import "./App.css";
import quillUIIcon from "./assets/icons/Quill.svg";
import { Image, Text, Link, Code, Container } from "./components";
import { Colors, FontSizes } from "./enums/enums";

function App() {
  return (
    <div className="App">
      <Image
        source={quillUIIcon}
        alt="QuillUI"
        height="240px"
        orientation="center"
      />
      <Container width="1080px" marginBottom="20px">
        <Text type="header">The simple black &amp; white UI collection</Text>
        <Text fontSize={FontSizes.Large} textAlign="center">
          Color Schemes are so tedious. Why even bother?<br></br>Why not just
          something as simple as ink on paper?<br></br>QuillUI is the perfect
          solution for all those who<br></br>value both minimalism and elegance.
        </Text>
        <Text fontSize={FontSizes.Large} textAlign="center">
          Find QuillUI on{" "}
          <Link source="https://github.com/edriste/QuillUI">GitHub</Link>
        </Text>
      </Container>
      <Container
        width="1080px"
        borderStyle="solid"
        borderWidth="1px"
        borderColor={Colors.Gray6}
      >
        <Text type="header">Components</Text>
        <Text type="subHeader" textAlign="left">
          Content
        </Text>
        <Container paddingTop="1px" paddingBottom="1px" marginLeft="15px">
          <Text type="subSubHeader" textAlign="left">
            Code
          </Text>
          <Code
            content={`
              console.log(Hello World!);

              for(let i = 0; i <= 10; i++){
                console.log(i);
              }

              console.log("Done!")
            `}
          />
          <Text type="subSubHeader" textAlign="left">
            Image
          </Text>
          <Image
            source={quillUIIcon}
            alt="QuillUI"
            height="120px"
            orientation="left"
          />
          <Text type="subSubHeader" textAlign="left">
            List
          </Text>
          <Text type="subSubHeader" textAlign="left">
            List Item
          </Text>
          <Text type="subSubHeader" textAlign="left">
            Table
          </Text>
          <Text type="subSubHeader" textAlign="left">
            Table Cell
          </Text>
          <Text type="subSubHeader" textAlign="left">
            Table Header
          </Text>
          <Text type="subSubHeader" textAlign="left">
            Table Row
          </Text>
          <Text type="subSubHeader" textAlign="left">
            Text
          </Text>
        </Container>
        <Text type="subHeader" textAlign="left">
          Interactive Elements
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Button
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Checkbox
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Dropdown
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Input
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Link
        </Text>
        <Link source="https://github.com/edriste/QuillUI">This is a Link</Link>
        <Text type="subSubHeader" textAlign="left">
          Modal
        </Text>
        <Text type="subHeader" textAlign="left">
          Layout &amp; Navigation
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Accordion
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Breadcrumb
        </Text>
        <Text type="subSubHeader" textAlign="left">
          &#9;Container
        </Text>
        <Container
          borderStyle="solid"
          borderWidth="1px"
          borderColor={Colors.Gray6}
          orientation="left"
        >
          This is a container
        </Container>
        <Text type="subSubHeader" textAlign="left">
          Menu
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Menu Item
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Tab Menu
        </Text>
        <Text type="subSubHeader" textAlign="left">
          Tab
        </Text>
      </Container>
    </div>
  );
}

export default App;
