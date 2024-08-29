import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { fontMappings } from "./fontStyles"; // Adjust the path as needed
import "./App.css";
const styleText = (text, font) => {
  const fontMapping = fontMappings[font];
  if (fontMapping) {
    return text
      .split("")
      .map((char) => fontMapping[char] || char)
      .join("");
  }
  return text;
};

const App = () => {
  const [text, setText] = useState("Your Text Here");
  const [copied, setCopied] = useState("");

  const handleCopy = (styledText) => {
    setCopied(styledText);
    setTimeout(() => setCopied(""), 2000); // Reset after 2 seconds
  };

  const fonts = Object.keys(fontMappings);

  return (
    <div className="App">
      <h1>Font Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text"
      />
      <div className="font-list">
        {fonts.map((font) => {
          const styledText = styleText(text, font);
          return (
            <div key={font} className="font-item">
              <span>{styledText}</span>
              <CopyToClipboard
                text={styledText}
                onCopy={() => handleCopy(styledText)}
              >
                <button className="copy-button">Copy</button>
              </CopyToClipboard>
              {copied === styledText && (
                <span className="copy-message">Copied!</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
