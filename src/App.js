import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emoji = {
    "🤙": ["call me", "sickkkk", "awesome"],
    "🙏": ["namaste", "high five", "m sorry"],
    "✋": ["hiii", "byee", "slap", "aashirwaad"],
    "✌️": ["victory", "peace out", "two"],
    "🙌": ["respect", "g.o.a.t", "appreciation"],
    "👌": ["ok", "nice", "3", "ek dum jhackass!!!"],
    "👏": ["clapping", "applaud"]
  };

  const [meaningList, setMeaningList] = useState([]);

  var emojiList = Object.keys(emoji);

  function onClickEmoji(e) {
    setMeaningList(emoji[e]);
  }

  function txtChange(e) {
    var userInput = e.target.value;
    var meaning = emoji[userInput];

    if (meaning === undefined) {
      setMeaningList(["We dont have info about that 😅"]);
    } else {
      setMeaningList(meaning);
    }
  }

  return (
    <div className="App">
      <h1>Hand Signs ✋</h1>
      <input
        onChange={txtChange}
        placeholder="enter emoji"
        class="inpEmoji"
        maxLength="2"
      />
      <h3 class="emjListHeading"> emoji's we know 🔥</h3>
      {emojiList.map((item, index) => {
        return (
          <span class="emojiListItem" onClick={() => onClickEmoji(item)}>
            {item}
          </span>
        );
      })}
      {meaningList.map((item, index) => {
        return <span class="meaningList">{item}</span>;
      })}
    </div>
  );
}
