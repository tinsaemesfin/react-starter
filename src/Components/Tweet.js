import React from "react";

const Tweet = ({ name, tweets, tweet, setTweets }) => {
  const deleteState = () => {
    // console.log("this is Frome Delete");
    setTweets(tweets.filter((t)=>t.id!== tweet.id));
  };
  return (
    <div className="tweet">
      <h2>{name} </h2>
      <h3>{tweet.message} </h3>
      <button onClick={deleteState}>Delete</button>
      <button>Like</button>
    </div>
  );
};
export default Tweet;
