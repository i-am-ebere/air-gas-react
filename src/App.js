import { useState } from "react";
import "./App.css";

function App() {
  const [todoListItems, setTodoListItems] = useState(["clean", "pick mail"]);

  return (
    <div className="App">
      <AddTodoListItem addItem={setTodoListItems} />
      {todoListItems.map((todo, index) => (
        <TodoListItem todoItemName={todo} key={index} />
      ))}
    </div>
  );
}

function AddTodoListItem(props) {
  const [todoItemValue, setTodoItemValue] = useState("");

  function onChangeUserInput(e) {
    setTodoItemValue(e.target.value);
  }

  function onSubmit() {
    props.addItem((prevState) => [...prevState, todoItemValue]);
  }

  return (
    <div>
      <input onChange={onChangeUserInput} value={todoItemValue} />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

function TodoListItem(props) {
  return <div>{props.todoItemName}</div>;
}

export default App;
