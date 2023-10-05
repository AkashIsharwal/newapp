import React, { useState } from "react";

export default function (props) {
  const wordCount = () => {
    const words = text.split(/\s+/);
    const actualWords = words.filter((word) => word !== "");
    return actualWords.length === 0 ? "0" : actualWords.length;
  };
  const convertUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setPreview(newText);
  };
  const convertLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setPreview(newText);
  };
  const bdaText = () => {
    // text&&
    // const words = text.split(/\s+/);
    // // let array=  words.

    // for (let index = 0; index < words.length; index++) {
    //   // const element = array[index];
    //   let a = [];
    //   a = words[index];
    //   a[index];

    //   console.log(a);
    //   console.log(index);
      // a = words[index].toUpperCase;
      // let str =text.split(/\s+/);
      let str = text.trim().split(" ")
      console.log(str);
        // return;
      if(str.length>0){
        for (var i = 0, x = str.length; i < x; i++) {
          if (str[i]){
          str[i] = str[i][0].toUpperCase() + str[i].substr(1);
      }}
        console.log(str);
        let newText = str.join(" ");
        setText(newText);
        setPreview(newText);

      }
    }
    // console.log(words);
    // setText(newText)

    // const actualWords = words.filter(word => word !== '')
    // let newText1=  words[1].charAt(0).toUpperCase() + words.slice(1);
    // setPreview(newText1);
  const clrText = () => {
    setText("");
    setPreview("The Text which you will write will appear here...");
  };
  const TextEdit = (event) => {
    setText(event.target.value);
    if (event.target.value === "") {
      setPreview("The Text which you will write will appear here...");
    } else {
      setPreview(event.target.value);
    }
  };
  const [text, setText] = useState("");
  // text='write new text' //wrong way to change text
  // setText('This is new Text'); //correct way
  const [previewText, setPreview] = useState(
    "The Text which you will write will appear here..."
  );

  return (
    <>
    <div className="container">

      <div
        className="mb-3 my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
        <h1>{props.heading}</h1>
        {/* <label for="myBox" className="form-label">{props.heading}</label> */}
        <textarea
          className="form-control"
          value={text}
          onChange={TextEdit}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="10"
          ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={convertUp}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary my-2" onClick={convertLo}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={clrText}>
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={bdaText}>
          Title Case
        </button>
      </div>
      <div
        className="mb-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
        >
        <h2>Your Summary</h2>
        <p>
          The word count: {wordCount()}, is and the characters are {text.length}{" "}
        </p>
        <p>Read time {0.008 * text.split(" ").length} </p>
        <h2>Preview</h2>
        <p>{previewText}</p>
        <p>{text.length > 0 ? text : "Write here..."}</p>
      </div>
        </div>
    </>
  );
};
