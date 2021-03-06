import React from "react";
import "./App.css";
import quillUIIcon from "./assets/icons/Quill.svg";
import {Image, Text, Link} from "./components";
import { FontSizes } from "./enums";

function App() {
  return (
    <div className="App">
      <Image source={quillUIIcon} alt="QuillUI" height="240px" orientation="center" />
      <Text type="header">The simple black &amp; white UI collection</Text>
      <Text fontSize={FontSizes.Large} textAlign="center">
        Color Schemes are so tedious. Why even bother?<br></br>Why not just
        something as simple as ink on paper?<br></br>QuillUI is the perfect
        solution for all those who<br></br>value both minimalism and elegance.
      </Text>
      <Text fontSize={FontSizes.Large} textAlign="center">
        Find QuillUI on <Link source="https://github.com/edriste/QuillUI">GitHub</Link>
      </Text>
    </div>
  );
}

export default App;
