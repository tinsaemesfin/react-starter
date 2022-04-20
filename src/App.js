import "./App.css";
import "./Components/Tweet";
import TweetList from "./Components/TweetList";
import CreateTweet from "./Components/CreateTweet";
import React, { useState,useEffect } from "react";

function App() {
 
  const [name, setName] = useState("Tinsae");
  const [textInput, setTextInput] = useState("");

  const [tweets, setTweets] = useState([]);

  useEffect(()=>{
    console.log("Heloo");
  },[tweets]);

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

