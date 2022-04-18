import React, { useState } from "react";

const CreateTweet = ({tweets,textInput,setTweets,setTextInput}) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitfo = (e) =>{
    e.preventDefault();
    setTweets([...tweets,textInput]);
    setTextInput("");
  }
  return (
    <form >
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="30"
        rows="10"
      ></textarea>
      <button  onClick={submitfo} >Submit</button>
    </form>
  );
};
export default CreateTweet;
