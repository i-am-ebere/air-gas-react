import "./App.css";

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
      <NameTagWithChildren>
        <span>hello I am a component with children</span>
      </NameTagWithChildren>
    </div>
  );
}

function NameTagWithChildren(props) {
  return (
    <div>
      <div>Hello NameTagWithChildren</div>
      <div>{props.children}</div>
    </div>
  );
}

function NameTag(props) {
  return (
    <div className="App">
      Name {props.name} {props.asdf}
      <br />
      {props.desc.age} - {props.desc.pet}
      <br />
      {props.listOfHobbies} - {props.getFullName()}
    </div>
  );
}

export default App;
