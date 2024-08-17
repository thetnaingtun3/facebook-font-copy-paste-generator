import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const fonts = [
  "Roboto",
  // "Lobster",
  // "Montserrat",
  // "Oswald",
  // "Pacifico",
  // "Raleway",
  // "Roboto Condensed",
  // "Dancing Script",
  // "Comfortaa",
  // "Bebas Neue",
];

const fontStyleMap = {
  a: "𝓪",
  b: "𝓫",
  c: "𝓬",
  d: "𝓭",
  e: "𝓮",
  f: "𝓯",
  g: "𝓰",
  h: "𝓱",
  i: "𝓲",
  j: "𝓳",
  k: "𝓴",
  l: "𝓵",
  m: "𝓶",
  n: "𝓷",
  o: "𝓸",
  p: "𝓹",
  q: "𝓺",
  r: "𝓻",
  s: "𝓼",
  t: "𝓽",
  u: "𝓾",
  v: "𝓿",
  w: "𝔀",
  x: "𝔁",
  y: "𝔂",
  z: "𝔃",
  A: "𝓐",
  B: "𝓑",
  C: "𝓒",
  D: "𝓓",
  E: "𝓔",
  F: "𝓕",
  G: "𝓖",
  H: "𝓗",
  I: "𝓘",
  J: "𝓙",
  K: "𝓚",
  L: "𝓛",
  M: "𝓜",
  N: "𝓝",
  O: "𝓞",
  P: "𝓟",
  Q: "𝓠",
  R: "𝓡",
  S: "𝓢",
  T: "𝓣",
  U: "𝓤",
  V: "𝓥",
  W: "𝓦",
  X: "𝓧",
  Y: "𝓨",
  Z: "𝓩",
  0: "𝟢",
  1: "𝟣",
  2: "𝟤",
  3: "𝟥",
  4: "𝟦",
  5: "𝟧",
  6: "𝟨",
  7: "𝟩",
  8: "𝟪",
  9: "𝟫",
};

const styleText = (text) => {
  return text
    .split("")
    .map((char) => fontStyleMap[char] || char)
    .join("");
};

const App = () => {
  const [text, setText] = useState("Your Text Here");
  const [copied, setCopied] = useState("");

  const handleCopy = (styledText) => {
    setCopied(styledText);
    setTimeout(() => setCopied(""), 2000); // Reset after 2 seconds
  };

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
          const styledText = styleText(text);
          return (
            <div key={font} className="font-item" style={{ fontFamily: font }}>
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
