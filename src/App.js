import { useState } from "react";
import "./App.css";
import { NameTagWithChildren, NameTag } from "./NameTagWithChildren";
import { Name } from "./Name";
import Email from "./Email";
import { Hobby } from "./Hobby";

function App() {
  // const [value, setterFunc] = useState(initialValue);
  const [isOn, setIsOn] = useState(0);
  const [birthday, setBirthday] = useState(10);
  console.log("here we go");
  return (
    <div className="App">
      Is this on: {isOn ? "is on" : "is off"}
      <br />
      <button onClick={() => setIsOn((prevState) => prevState + 1)}>
        Toggle isOn
      </button>
      <NameTag
        listOfHobbies={["running", "jumping"]}
        name="Ebere"
        asdf={birthday}
        changeBirthday={setBirthday}
        desc={{ age: 10, pet: "cat" }}
        getFullName={() => "Ebere I"}
      />
      {/* 
      <br />
      <br />
      <NameTagWithChildren isLoading={false}>
        <div>hello I am a component with children1</div>
        <div>hello I am a component with children2</div>
        <div>hello I am a component with children3</div>
      </NameTagWithChildren> */}
      {/* <Name name="Ebere I" />
      <Email name="ebere@email.com" />
      <Hobby name="Running" /> */}
    </div>
  );
}

export default App;
