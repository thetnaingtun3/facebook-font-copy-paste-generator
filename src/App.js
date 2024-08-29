// import React, { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import "./App.css";
//
// const fonts = [
//   "Roboto",
//   "Podkova",
//   "Sansita Swashed",
//   // Additional fonts can be added here
// ];
//
// const fontStyleMap = {
//   a: "𝓪",
//   b: "𝓫",
//   c: "𝓬",
//   d: "𝓭",
//   e: "𝓮",
//   f: "𝓯",
//   g: "𝓰",
//   h: "𝓱",
//   i: "𝓲",
//   j: "𝓳",
//   k: "𝓴",
//   l: "𝓵",
//   m: "𝓶",
//   n: "𝓷",
//   o: "𝓸",
//   p: "𝓹",
//   q: "𝓺",
//   r: "𝓻",
//   s: "𝓼",
//   t: "𝓽",
//   u: "𝓾",
//   v: "𝓿",
//   w: "𝔀",
//   x: "𝔁",
//   y: "𝔂",
//   z: "𝔃",
//   A: "𝓐",
//   B: "𝓑",
//   C: "𝓒",
//   D: "𝓓",
//   E: "𝓔",
//   F: "𝓕",
//   G: "𝓖",
//   H: "𝓗",
//   I: "𝓘",
//   J: "𝓙",
//   K: "𝓚",
//   L: "𝓛",
//   M: "𝓜",
//   N: "𝓝",
//   O: "𝓞",
//   P: "𝓟",
//   Q: "𝓠",
//   R: "𝓡",
//   S: "𝓢",
//   T: "𝓣",
//   U: "𝓤",
//   V: "𝓥",
//   W: "𝓦",
//   X: "𝓧",
//   Y: "𝓨",
//   Z: "𝓩",
//   0: "𝟢",
//   1: "𝟣",
//   2: "𝟤",
//   3: "𝟥",
//   4: "𝟦",
//   5: "𝟧",
//   6: "𝟨",
//   7: "𝟩",
//   8: "𝟪",
//   9: "𝟫",
// };
//
// const styleText = (text) => {
//   return text
//     .split("")
//     .map((char) => fontStyleMap[char] || char)
//     .join("");
// };
//
// const App = () => {
//   const [text, setText] = useState("Your Text Here");
//   const [copied, setCopied] = useState("");
//
//   const handleCopy = (styledText) => {
//     setCopied(styledText);
//     setTimeout(() => setCopied(""), 2000); // Reset after 2 seconds
//   };
//
//   return (
//     <div className="App">
//       <h1>Font Generator</h1>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter your text"
//       />
//       <div className="font-list">
//         {fonts.map((font) => {
//           // For Podkova and Sansita Swashed, we'll use the default text without custom styling
//           const styledText =
//             font === "Podkova" || font === "Sansita Swashed"
//               ? text
//               : styleText(text);
//           return (
//             <div
//               key={font}
//               className="font-item"
//               style={{
//                 fontFamily: font,
//                 fontWeight: font === "Podkova" ? 400 : "normal",
//               }}
//             >
//               <span>{styledText}</span>
//               <CopyToClipboard
//                 text={styledText}
//                 onCopy={() => handleCopy(styledText)}
//               >
//                 <button className="copy-button">Copy</button>
//               </CopyToClipboard>
//               {copied === styledText && (
//                 <span className="copy-message">Copied!</span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const fonts = [
  "Roboto", // Regular font
  "Podkova", // Podkova font
  "Sansita Swashed", // Regular font
  "Cursive", // Custom cursive font style
  "Monospace", // Monospace font style
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

const MooncodeFont = {
  a: "𝐚",
  b: "𝐛",
  c: "𝐜",
  d: "𝐝",
  e: "𝐞",
  f: "𝐟",
  g: "𝐠",
  h: "𝐡",
  i: "𝐢",
  j: "𝐣",
  k: "𝐤",
  l: "𝐥",
  m: "𝐦",
  n: "𝐧",
  o: "𝐨",
  p: "𝐩",
  q: "𝐪",
  r: "𝐫",
  s: "𝐬",
  t: "𝐭",
  u: "𝐮",
  v: "𝐯",
  w: "𝐰",
  x: "𝐱",
  y: "𝐲",
  z: "𝐳",
  A: "𝐀",
  B: "𝐁",
  C: "𝐂",
  D: "𝐃",
  E: "𝐄",
  F: "𝐅",
  G: "𝐆",
  H: "𝐇",
  I: "𝐈",
  J: "𝐉",
  K: "𝐊",
  L: "𝐋",
  M: "𝐌",
  N: "𝐍",
  O: "𝐎",
  P: "𝐏",
  Q: "𝐐",
  R: "𝐑",
  S: "𝐒",
  T: "𝐓",
  U: "𝐔",
  V: "𝐕",
  W: "𝐖",
  X: "𝐗",
  Y: "𝐘",
  Z: "𝐙",
};

console.log(MooncodeFont);
const monospaceFontStyleMap = {
  a: "𝚊",
  b: "𝚋",
  c: "𝚌",
  d: "𝚍",
  e: "𝚎",
  f: "𝚏",
  g: "𝚐",
  h: "𝚑",
  i: "𝚒",
  j: "𝚓",
  k: "𝚔",
  l: "𝚕",
  m: "𝚖",
  n: "𝚗",
  o: "𝚘",
  p: "𝚙",
  q: "𝚚",
  r: "𝚛",
  s: "𝚜",
  t: "𝚝",
  u: "𝚞",
  v: "𝚟",
  w: "𝚠",
  x: "𝚡",
  y: "𝚢",
  z: "𝚣",
  A: "𝙰",
  B: "𝙱",
  C: "𝙲",
  D: "𝙳",
  E: "𝙴",
  F: "𝙵",
  G: "𝙶",
  H: "𝙷",
  I: "𝙸",
  J: "𝙹",
  K: "𝙺",
  L: "𝙻",
  M: "𝙼",
  N: "𝙽",
  O: "𝙾",
  P: "𝙿",
  Q: "𝚀",
  R: "𝚁",
  S: "𝚂",
  T: "𝚃",
  U: "𝚄",
  V: "𝚅",
  W: "𝚆",
  X: "𝚇",
  Y: "𝚈",
  Z: "𝚉",
  0: "𝟶",
  1: "𝟷",
  2: "𝟸",
  3: "𝟹",
  4: "𝟺",
  5: "𝟻",
  6: "𝟼",
  7: "𝟽",
  8: "𝟾",
  9: "𝟿",
};

const styleText = (text, font) => {
  if (font === "Cursive") {
    return text
      .split("")
      .map((char) => fontStyleMap[char] || char)
      .join("");
  } else if (font === "Monospace") {
    return text
      .split("")
      .map((char) => monospaceFontStyleMap[char] || char)
      .join("");
  }
  return text; // Return the text as-is for regular fonts
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
          const styledText =
            font === "Cursive" || font === "Monospace"
              ? styleText(text, font)
              : text;
          return (
            <div
              key={font}
              className="font-item"
              style={{
                fontFamily: font,
                fontWeight:
                  font === "Podkova" || font === "Sansita Swashed"
                    ? 400
                    : "normal",
              }}
            >
              <span>{styledText}</span>
              <CopyToClipboard
                text={styledText} // Ensure correct text is copied
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
//
