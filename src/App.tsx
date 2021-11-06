import React from "react";
import "./App.css";
import quillUIIcon from "./assets/icons/Quill.svg";
import Image from "./components/Image";
import Text from "./components/Text";
import { FontSizes } from "./enums";

function App() {
  return (
    <div className="App">
      <Image source={quillUIIcon} alt="QuillUI" height="240px" />
      <Text type="header">The simple black &amp; white UI collection</Text>
      <Text fontSize={FontSizes.Large} textAlign="center">
        Color Schemes are so tedious. Why even bother?<br></br>Why not just
        something as simple as ink on paper?<br></br>QuillUI is the perfect
        solution for all those who<br></br>value both minimalism and elegance.
      </Text>
      <Text fontSize={FontSizes.Large} textAlign="center">
        Find QuillUI on <a href="https://github.com/edriste/QuillUI">Github</a>
      </Text>
    </div>
  );
}

export default App;
