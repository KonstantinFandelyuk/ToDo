import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Import from "./components/Input";
import ListItem from "./components/ListItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [listItem, setListItem] = useState([]);

  const handlerAddList = () => {
    let itemsArray = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];

    itemsArray.push(inputValue);

    setListItem([...inputValue, ...listItem]);
    localStorage.setItem("todo", JSON.stringify(itemsArray));

    console.log("W");
  };

  const handlerInputValue = (event) => {
    let str = event.target.closest("input").value;
    setInputValue(str);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Import
          onChange={(event) => {
            handlerInputValue(event);
          }}
        />
        <Button
          name="ADD Task"
          onClick={(event) => {
            handlerAddList();
          }}
        />
        <ListItem />
      </header>
    </div>
  );
}

export default App;
