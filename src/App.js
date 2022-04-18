import "./App.css";
import "./Components/Tweet";
import TweetList from "./Components/TweetList";
import CreateTweet from "./Components/CreateTweet";

function App() {
  const name = "Dev ed";
  const message = "I went to sleep today wow";

  const sayHelloHandler = (user) => {
    console.log(`Hello There ${user}`);
  };
  const events = (e) => {
    console.log(`${e}`);
  };
// the e Variable in any event is assocated to event attributes or properties
  return (
    <div>
      <h1>Hello From Tinsae</h1>
      <button onClick={() => sayHelloHandler("mike")}>Click</button>
      {/* <CreateTweet />
      <TweetList name={name} message={message}  /> */}
    </div>
  );
}

export default App;
