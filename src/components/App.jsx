import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function createEmojiCard(emoji) {
  return (
    <>
      <EmojiCard
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
      />
    </>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <EmojiCard /> */}
        {emojipedia.map(createEmojiCard)}
      </dl>
    </div>
  );
}

export default App;
