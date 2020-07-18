import React, { useState } from "react";
import { Wrap } from "./components/styled";
import Button from "./components/Button";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

const itemTemplate = {
  label: "",
  done: false,
};

let id = 0;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState([]);

  const handlerAddList = () => {
    const newItem = { ...itemTemplate, label: inputValue, id: id++ };
    setListItem([...listItem, newItem]);
    setInputValue("");
  };

  return (
    <Wrap className="App">
      <header className="App-header">
        <Input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <Button
          value="ADD Task"
          onClick={(event) => {
            handlerAddList();
          }}
        />
        <ListItem listItem={listItem} setListItem={setListItem} />
      </header>
    </Wrap>
  );
}

export default App;
