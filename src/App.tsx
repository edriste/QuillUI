import React from 'react';
import './App.css';
import quillUIIcon from "./assets/icons/Quill.svg";
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <Image source={quillUIIcon} alt="QuillUI" height="240px"/>
    </div>
  );
}

export default App;
