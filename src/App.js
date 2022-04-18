import "./App.css";
import "./Components/Tweet";
import TweetList from "./Components/TweetList";
import CreateTweet from "./Components/CreateTweet";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Tinsae");
  const [textInput, setTextInput] = useState("");

  const [tweets, setTweets] = useState([]);

  const message = "Holyday";

  return (
    <div>
      <CreateTweet
        tweets={tweets}
        textInput={textInput}
        setTweets={setTweets}
        setTextInput={setTextInput}
      />
      <TweetList name={name} tweets={tweets}  setTweets={setTweets} />
    </div>
  );
}

export default App;

