import React, { useState } from "react";
import { Wrap } from "./components/styled";
import Button from "./components/Button";
import Import from "./components/Input";
import ListItem from "./components/ListItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState([]);
  // const [taskDone, setTaskDone] = useState("");

  const handlerAddList = () => {
    let itemsArray = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
    itemsArray.push(inputValue);
    setListItem([...inputValue, ...listItem]);
    localStorage.setItem("todo", JSON.stringify(itemsArray));
  };

  const handlerInputValue = (event) => {
    let str = event.target.value;
    setInputValue(str);
  };

  return (
    <Wrap className="App">
      <header className="App-header">
        <Import
          onChange={(event) => {
            handlerInputValue(event);
          }}
        />
        <Button
          primary
          value="ADD Task"
          onClick={(event) => {
            handlerAddList();
          }}
        />
        <ListItem listItem={listItem} />
      </header>
    </Wrap>
  );
}

export default App;
