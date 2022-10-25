import { useState } from "react";
import BodyText from "./components/BodyText/BodyText";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const [text, setText] = useState("Not Clicked");

  const handleClick = () => {
    setText("Clicked")
  }

  return (
    <div className="App">
      <BodyText text={text} />
      <br />
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;
