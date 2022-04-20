import React from "react";

const Tweet = ({ name, tweets, tweet, setTweets }) => {
  const deleteState = () => {
    // console.log("this is Frome Delete");
    setTweets(tweets.filter((t)=>t!== tweet));
  };
  return (
    <div className="tweet">
      <h2>{name} </h2>
      <h3>{tweet} </h3>
      <button onClick={deleteState}>Delete</button>
      <button>Like</button>
    </div>
  );
};
export default Tweet;
