function shouldDisplayLoading(props) {
  if (props.isLoading) {
    return "loading...";
  } else {
    return <div>{props.children}</div>;
  }
}

export function NameTagWithChildren(props) {
  /*
    could be outside as well
    function shouldDisplayLoading() {
        if (props.isLoading) {
          return "loading...";
        } else {
          return <div>{props.children}</div>;
        }
      }*/
  return (
    <div>
      <div>Hello NameTagWithChildren</div>
      {/* adding it to a function {shouldDisplayLoading()} */}
      {/* {shouldDisplayLoading(props)} */}
      {props.isLoading ? "loading..." : <div>{props.children}</div>}
    </div>
  );
}

export function NameTag(props) {
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
