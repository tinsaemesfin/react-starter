import "./App.css";
import "./Components/Tweet";
import TweetList from "./Components/TweetList";
import CreateTweet from "./Components/CreateTweet";
import React, {useState} from "react";

function App() {
const [name,setName]=useState("Tinsae"); 
const message="Holyday"

   return (
    <div>
      
      <CreateTweet />
      <TweetList name={name} message={message}  />
    </div>
  );
}

export default App;
  