import "./App.css";
import "./Components/Tweet";
import TweetList from "./Components/TweetList";
import CreateTweet from "./Components/CreateTweet";
import React, {useState} from "react";

function App() {
  const [name,setName]=useState('Dev Ed');

  const sayHelloHandler = () => {
    setName('Florin Pop')  
  };

   return (
    <div>
      <h1>Hello {name} </h1>
      <button onClick={sayHelloHandler}>Click</button>
      {/* <CreateTweet />
      <TweetList name={name} message={message}  /> */}
    </div>
  );
}

export default App;
  