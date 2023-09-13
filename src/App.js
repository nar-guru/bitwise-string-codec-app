import React, { useState } from "react";
import { encode, decode } from "./bitwise-string-codec";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const encoded = encode(inputValue);
    setOutputValue(encoded.join(", "));

    // Perform decoding and assertion
    const decoded = decode(encoded);
    if (decoded === inputValue) {
      console.log("Decoding assertion passed!");
    } else {
      console.log(decoded);
      console.error("Decoding assertion failed!");
    }
  };

  return (
    <div className="App">
      <textarea
        className="input"
        placeholder="Enter your text here"
        value={inputValue}
        onChange={handleInputChange}
      ></textarea>
      <button className="convert-btn" onClick={handleButtonClick}>
        Convert
      </button>
      <div className="output">{outputValue}</div>
    </div>
  );
}

export default App;
