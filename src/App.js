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
      <NameTagWithChildren isLoading={false}>
        <div>hello I am a component with children1</div>
        <div>hello I am a component with children2</div>
        <div>hello I am a component with children3</div>
      </NameTagWithChildren>
    </div>
  );
}

function NameTagWithChildren(props) {
  function shouldDisplayLoading() {
    if (props.isLoading) {
      return "loading...";
    } else {
      return <div>{props.children}</div>;
    }
  }

  return (
    <div>
      <div>Hello NameTagWithChildren</div>
      {/* adding it to a function {shouldDisplayLoading()} */}
      {props.isLoading ? "loading..." : <div>{props.children}</div>}
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
