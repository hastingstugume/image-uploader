import React, { useRef, useState } from "react";
import "./App.css";
import image from "./image.svg";

const DragArea = () => {
  const [files, setFiles] = useState(null);

  const fileInput = useRef(null);
  const onDragOver = (event) => {
    event.preventDefault(); // Prevent the browser from opening a new tab when dragging an item over it
    event.dataTransfer.dropEffect = "copy";
  };

  const onDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
    setFiles(event.dataTransfer.files);
  };

  return (
    <>
      <header className="App-header">Upload your image</header>
      <div className="drag-area" onDragOver={onDragOver} onDrop={onDrop}>
        <div className="image">
          <img
            src={files ? URL.createObjectURL(files[0]) : image}
            alt="Drag"
            height="150px"
            width="150px"
          />
        </div>
        <div className="center">
          <p>Drag & Drop your image here</p>
        </div>
      </div>

      <div>
        <input
          type="file"
          ref={fileInput}
          onChange={(event) => {
            setFiles(event.target.files);
          }}
          hidden
        />
      </div>

      <div className="file-upload">
        <button
          onClick={() => {
            fileInput.current.click();
          }}
        >
          Choose File
        </button>
      </div>
    </>
  );
};

export default DragArea;
