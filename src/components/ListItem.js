import React from "react";
import Button from "./Button";
import { List, ListLi, OtherFlex } from "./styled";

function ListItem({ props, listItem }) {
  let itemsArray = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
  console.log(listItem);
  const doneTask = (event) => {
    let atr = event.target;
    console.log(atr);
  };
  const inputElement = itemsArray.map((item) => {
    return (
      <>
        <OtherFlex>
          <ListLi done="false">{item}</ListLi>
          <Button
            value="Done Task"
            onClick={(event) => {
              doneTask(event);
            }}
          />
          <Button
            value="Del Task"
            onClick={(event) => {
              doneTask(event);
            }}
          />
        </OtherFlex>
      </>
    );
  });

  return (
    <>
      <List>{inputElement}</List>
    </>
  );
}

export default ListItem;
