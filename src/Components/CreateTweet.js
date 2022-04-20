import React, { useState } from "react";
import {v4 as uuid} from "uuid";
const CreateTweet = ({tweets,textInput,setTweets,setTextInput}) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitfo = (e) =>{
    e.preventDefault();
    setTweets([...tweets,{message:textInput,id:uuid()}]);
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
