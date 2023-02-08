import "./App.css";
import { NameTagWithChildren, NameTag } from "./NameTagWithChildren";

function App() {
  return (
    <div className="App">
      <NameTag
        listOfHobbies={["running", "jumping"]}
        name="Ebere"
        asdf={30}
        desc={{ age: 10, pet: "cat" }}
        getFullName={() => "Ebere I"}
      />
      <br />
      <br />
      <NameTagWithChildren isLoading={false}>
        <div>hello I am a component with children1</div>
        <div>hello I am a component with children2</div>
        <div>hello I am a component with children3</div>
      </NameTagWithChildren>
    </div>
  );
}

export default App;
