import React from "react";

const Tweet = ({name,message,setTweets}) => {
  const deleteState = () =>{
     
  }
  return (
    <div className="tweet">
      <h2>{name} </h2>
      <h3>{message} </h3>
      <button onClick={deleteState}>Delete</button>
      <button>Like</button>
    </div>
  );
};
export default Tweet;
